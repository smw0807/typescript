import { sha256 } from './cryptography';
import { randomDelay } from '../ui/common';

const HASH_REQUIREMENT = '0000';

export interface Transaction {
  readonly sender: string;
  readonly recipient: string;
  readonly amount: number;
}

export interface Block {
  readonly hash: string;
  readonly nonce: number;
  readonly previousHash: string;
  readonly timestamp: number;
  readonly transactions: Transaction[];
}

/**
 * Omit : 특정 속성만 제거한 타입을 정의합니다. pick의 반대
 * NotMinedBlock는 Block 인터페이스에서 hash와 none이 빠진 타입
 */
export type WithoutHash<T> = Omit<T, 'hash'>;
export type NotMinedBlock = Omit<Block, 'hash' | 'nonce'>;

export class BlockchainNode {
  private _chain: Block[] = [];
  private _pendingTransactions: Transaction[] = [];
  private _isMining = false;

  initializeWith(blocks: Block[]): void {
    this._chain = [...blocks];
  }

  async initializeWithGenesisBlock(): Promise<void> {
    const genesisBlock = await this.mineBlock({
      previousHash: '0',
      timestamp: Date.now(),
      transactions: [],
    });
  }

  async mineBlock(block: NotMinedBlock): Promise<Block> {
    this._isMining = true;
    let hash = '';
    let nonce = 0;

    do {
      hash = await this.calculateHash({ ...block, nonce: ++nonce });
    } while (!hash.startsWith(HASH_REQUIREMENT));

    this._isMining = false;
    this._pendingTransactions = [];
    return { ...block, hash, nonce };
  }

  async mineBlockWith(transactions: Transaction[]): Promise<Block> {
    // 참고: 데모 목적으로 임의 지연을 도입합니다.
    // 블록의 타임스탬프 생성을 랜덤화하여 트랜잭션을 생성하는 노드
    // 타임스탬프는 항상 더 빠를 것이기 때문에 이점이 없습니다.
    await randomDelay(500);

    const block = {
      previousHash: this.latestBlock.hash,
      timestamp: Date.now(),
      transactions,
    };
    return this.mineBlock(block);
  }

  get isMining(): boolean {
    return this._isMining;
  }

  get chain(): Block[] {
    return [...this._chain];
  }

  get chainIsEmpty(): boolean {
    return this._chain.length === 0;
  }

  get latestBlock(): Block {
    return this._chain[this._chain.length - 1];
  }

  get pendingTransactions(): Transaction[] {
    return [...this._pendingTransactions];
  }

  get hasPendingTransactions(): boolean {
    return this.pendingTransactions.length > 0;
  }

  get noPendingTransactions(): boolean {
    return this.pendingTransactions.length === 0;
  }

  addTransaction(transaction: Transaction): void {
    this._pendingTransactions.push(transaction);
  }

  /**
   * 블록 체인에 블록을 추가하려고 시도합니다. 거부된 약속은 블록이 추가되지 않은 이유를 전달합니다.
   */
  async addBlock(newBlock: Block): Promise<void> {
    const errorMessagePrefix = `⚠️ Block "${newBlock.hash.substr(
      0,
      8
    )}" is rejected`;

    // 새 블록을 추가할 블록을 찾습니다.
    const previousBlockIndex = this._chain.findIndex(
      (b) => b.hash === newBlock.previousHash
    );
    if (previousBlockIndex < 0) {
      throw new Error(
        `${errorMessagePrefix} - there is no block in the chain with the specified previous hash "${newBlock.previousHash.substr(
          0,
          8
        )}".`
      );
    }

    // 현재 노드에 이미 하나 이상의 블록이 생성되어 있거나 네트워크의 다른 노드로부터 수신되어 있을 수 있습니다,
    // 추가하려는 체인 다음에 추가합니다. 이 경우 가장 긴 체인이 우선하고 새로운 블록이 거부됩니다.
    const tail = this._chain.slice(previousBlockIndex + 1);
    if (tail.length >= 1) {
      throw new Error(
        `${errorMessagePrefix} - the longer tail of the current node takes precedence over the new block.`
      );
    }

    // 이전 블록의 해시에 대해 새 블록의 해시 확인
    const newBlockHash = await this.calculateHash(newBlock);
    const prevBlockBash = this._chain[previousBlockIndex].hash;
    const newBlockValid =
      newBlockHash.startsWith(HASH_REQUIREMENT) &&
      newBlock.previousHash === prevBlockBash &&
      newBlock.hash === newBlockHash;

    if (!newBlockValid) {
      throw new Error(`${errorMessagePrefix} - hash verification has failed.`);
    }

    // 체인 끝에 새 블록을 추가합니다.
    this._chain = [...this._chain, newBlock];
  }

  private async calculateHash(block: WithoutHash<Block>): Promise<string> {
    const data =
      block.previousHash +
      block.timestamp +
      JSON.stringify(block.transactions) +
      block.nonce;
    return sha256(data);
  }
}
