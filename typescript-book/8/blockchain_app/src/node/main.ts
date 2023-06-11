import { Blockchain } from '../lib/bc_transactions';

(async function maine(): Promise<void> {
  console.log('⏳ Initializing the blockchain, creating the genesis block...');

  //새 블록을 생성
  const bc = new Blockchain();
  //제네시스 블록 생성
  await bc.createGenesisBlock();

  //보류 중인 거래 내역
  bc.createTransaction({ sender: 'John', recipient: 'Kate', amount: 50 });
  bc.createTransaction({ sender: 'Kate', recipient: 'Mike', amount: 10 });

  //새 블록을 생성하고 블록체인에 추가
  await bc.minePendingTransactions();

  //보류 중인 거래 내역
  bc.createTransaction({ sender: 'Alex', recipient: 'Rosa', amount: 15 });
  bc.createTransaction({ sender: 'Gina', recipient: 'Rick', amount: 60 });

  //새 블록을 생성하고 블록체인에 추가
  await bc.minePendingTransactions();

  // 블록체인의 내역을 출력
  console.log(JSON.stringify(bc, null, 2));
})();
