import * as crypto from 'crypto';
class Block {
  readonly nonce: number;
  readonly hash: string;

  constructor(
    readonly index: number,
    readonly previousHash: string,
    readonly timestamp: number,
    readonly data: string
  ) {
    const { nonce, hash } = this.mine(); //논스와 해시 계산
    this.nonce = nonce;
    this.hash = hash;
  }

  private calculatteHash(nonce: number): string {
    const data =
      this.index + this.previousHash + this.timestamp + this.data + nonce;
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  private mine(): { nonce: number; hash: string } {
    let hash: string;
    let nonce = 0;

    do {
      hash = this.calculatteHash(++nonce); //브루트 포스 시작
    } while (hash.startsWith('00000') === false); //해시 시작값이 00000이 될 때까지 반복문을 실행

    return { nonce, hash };
  }
}

class Blockchain {
  private readonly chain: Block[] = [];

  private get latestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  constructor() {
    //제네시스 블록 생성
    this.chain.push(new Block(0, '0', Date.now(), 'Genesis block'));
  }

  addBlock(data: string): void {
    const block = new Block(
      this.latestBlock.index + 1,
      this.latestBlock.hash,
      Date.now(),
      data
    );
    this.chain.push(block);
  }
}

console.log('Creating the blockchain with the genesis block...');
const blockchain = new Blockchain();

console.log('Mining block #1...');
console.time('First block');
blockchain.addBlock('First block');
console.timeEnd('First block');

console.log('Mining block #2...');
console.time('Second block');
blockchain.addBlock('Second block');
console.timeEnd('Second block');

console.log(JSON.stringify(blockchain, null, 2));
