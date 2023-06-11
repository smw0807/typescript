import { Blockchain, Block } from '../lib/bc_transactions.js';

//앱의 상태 enum 값 선언
enum Status {
  //초기화
  Initialization = '⏳ Initializing the blockchain, creating the genesis block...',
  //거래 내역 추가
  AddTransaction = '💸 Add one or more transactions.',
  //채굴 준비
  ReadyToMine = '✅ Ready to mine a new block.',
  //채굴 진행
  MineInProgress = '⏳ Mining a new block...',
}

const amountEl = document.getElementById('amount') as HTMLInputElement;
const blocksEl = document.getElementById('blocks') as HTMLDivElement;
const confirmBtn = document.getElementById('confirm') as HTMLButtonElement;
const pendingTransactionsEl = document.getElementById(
  'pending-transactions'
) as HTMLPreElement;
const recipientEl = document.getElementById('recipient') as HTMLInputElement;
const senderEl = document.getElementById('sender') as HTMLInputElement;
const statusEl = document.getElementById('status') as HTMLParagraphElement;
const transferBtn = document.getElementById('transfer') as HTMLButtonElement;

(async function mine(): Promise<void> {
  //버튼에 이벤트 리스너 등록
  transferBtn.addEventListener('click', addTransaction);
  confirmBtn.addEventListener('click', mineBlock);

  //enum을 사용해 초기 상태 메세지를 표시
  statusEl.textContent = Status.Initialization;

  //블록체인 인스턴스 생성
  const blockchain = new Blockchain();
  //제네시스 블록 생성
  await blockchain.createGenesisBlock();
  //렌더링된 블록을 표시하기 위해 HTML을 생성
  blocksEl.innerHTML = blockchain.chain
    .map((b, i) => generateBlockHtml(b, i))
    .join('');

  statusEl.textContent = Status.AddTransaction;
  toggleState(true, false);

  //보류 중인 거래 내역 추가
  function addTransaction() {
    blockchain.createTransaction({
      sender: senderEl.value,
      recipient: recipientEl.value,
      amount: parseInt(amountEl.value),
    });

    toggleState(false, false);
    //보류중인 거래 내열을 문자열로 렌더링
    pendingTransactionsEl.textContent = blockchain.pendingTransactions
      .map(t => `${t.sender} → ${t.recipient}: $${t.amount}`)
      .join('\n');
    statusEl.textContent = Status.ReadyToMine;

    //폼 양식의 값을 초기화
    senderEl.value = '';
    recipientEl.value = '';
    amountEl.value = '0';
  }

  //블록 채굴을 시작하고 웹 페이지에 렌더링
  async function mineBlock() {
    statusEl.textContent = Status.MineInProgress;
    toggleState(true, true);
    //신규 블록을 생성하고, 해시를 구한 다음, 블록체인에 추가한다
    await blockchain.minePendingTransactions();

    pendingTransactionsEl.textContent =
      'No pending transactions at the moment.';
    statusEl.textContent = Status.AddTransaction;
    //새로 추가된 블록을 웹 페이지에 표시
    blocksEl.innerHTML = blockchain.chain
      .map((b, i) => generateBlockHtml(b, i))
      .join('');
    toggleState(true, false);
  }
})();

function toggleState(confirmation: boolean, transferForm: boolean): void {
  transferBtn.disabled =
    amountEl.disabled =
    senderEl.disabled =
    recipientEl.disabled =
      transferForm;
  confirmBtn.disabled = confirmation;
}

function generateBlockHtml(block: Block, index: number) {
  return `
    <div class="block">
      <span class="block__index">#${index}</span>
      <span class="block__timestamp">${new Date(
        block.timestamp
      ).toLocaleTimeString()}</span>
      <div class="prev-hash">
        <div class="hash-title">← PREV HASH</div>
        <div class="hash-value">${block.previousHash}</div>
      </div>
      <div class="this-hash">
        <div class="hash-title">THIS HASH</div>
        <div class="hash-value">${block.hash}</div>
      </div>
      <div class="block__transactions">
        <div class="hash-title">TRANSACTIONS</div>
        <pre class="transactions-value">${block.transactions.map(
          t => `${t.sender} → ${t.recipient} - $${t.amount}`
        )}</pre>
      </div>
    </div>
  `;
}
