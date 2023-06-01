import { createHash } from 'crypto';
class Block {
  readonly hash: string; //블록 해시값

  constructor(
    readonly index: number, //블록 인데스로 순차적으로 매겨진다.
    readonly previousHash: string, //이전 블록의 해시값
    readonly timestamp: number, //블록이 생성된 시간
    readonly data: string //앱 관련 데이터
  ) {
    this.hash = this.calculateHash(); //생성된 블록 해시값을 계산
  }

  private calculateHash(): string {
    const data = this.index + this.previousHash + this.timestamp + this.data;
    return createHash('sha256') //SHA-256 해시를 생성하기 위해 Hash의 인스턴스를 생성한다.
      .update(data) //해시 객체 내 해시값을 계산하고 업데이트 한다.
      .digest('hex'); //해시값을 16진수로 변환한다.
  }
}

class Blockchain {
  private readonly chain: Block[] = [];
  private get latestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  constructor() {
    //제네시스 블록 생성
    this.chain.push(new Block(0, '0', Date.now(), 'Genesis Block'));
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

//3개의 블록 생성
console.log('Creating the blockchain with the genesis block...');
const blockchain = new Blockchain();
console.log('Mining block #1...');
blockchain.addBlock('First block');

console.log('Mining block #2...');
blockchain.addBlock('Second block');

console.log(JSON.stringify(blockchain, null, 2));
