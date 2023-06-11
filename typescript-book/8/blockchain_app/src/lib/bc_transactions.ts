import { sha256 } from '../lib/universal_sha256.js';
//단일 거래 내역의 커스텀 타입
export interface Transaction {
  readonly sender: string;
  readonly recipient: string;
  readonly amount: number;
}

//단일 블록의 커스텀 타입
export class Block {
  nonce: number = 0;
  hash: string;

  constructor(
    readonly previousHash: string,
    readonly timestamp: number,
    //블록의 인스턴스화 동안 거래 내역 배열을 전달한다.
    readonly transactions: Transaction[]
  ) {}

  //블록을 채굴하는 비동기 함수
  async mine(): Promise<void> {
    do {
      //해시 값을 찾기위해 논스를 대입한다.
      this.hash = await this.calculateHash(++this.nonce);
    } while (this.hash.startsWith('0000') === false);
  }

  //해시 생성을 위한 비동기 래퍼 함수
  private async calculateHash(nonce: number): Promise<string> {
    const data =
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.transactions) +
      nonce;
    //crypto API를 사용하고 해시를 생성하는 함수를 호출
    return sha256(data);
  }
}

export class Blockchain {
  private readonly _chain: Block[] = [];
  private _pendingTransactions: Transaction[] = [];

  //가장 최근에 추가된 블록을 가져오는 게터 함수
  private get latestBlock(): Block {
    return this._chain[this._chain.length - 1];
  }

  //모든 블록을 가져오는 게터 함수
  get chain(): Block[] {
    // return this._chain; //todo check
    return [...this._chain];
  }

  //보류 중인 거래 내역을 가져오는 게터함수
  get pendingTransactions(): Transaction[] {
    // return this._pendingTransactions; //todo check
    return [...this._pendingTransactions];
  }

  //제네시스 블록 생성 함수
  async createGenesisBlock(): Promise<void> {
    const genesisBlock = new Block('0', Date.now(), []);
    //제네시스 블록을 위한 해시 생성
    await genesisBlock.mine();
    //블록체인에 제네시스 블록 추가
    this._chain.push(genesisBlock);
  }

  //보류 중인 거래 내역을 추가
  createTransaction(transaction: Transaction): void {
    this._pendingTransactions.push(transaction);
  }

  //보류 중인 거래 내역을 블록으로 만든 후 블록체인에 추가
  async minePendingTransactions(): Promise<void> {
    const block = new Block(
      this.latestBlock.hash,
      Date.now(),
      this._pendingTransactions
    );
    //신규 블록에 대한 해시를 생성
    await block.mine();
    //블록체인에 신규 블록을 추가
    this._chain.push(block);
    this._pendingTransactions = [];
  }
}
