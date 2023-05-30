/**
 * 8.1.4 해시와 논스를 사용한 미니 프로젝트
 * 함수 만들기 분제
 * 1. generateHash(input:string) 함수 작성
 *  - 문자열을 입력받고 crypto API를 사용해 SHA-256 해시를 찾는다.
 *
 * 2. calculateHashWithNonce(nonce: number) 함수 작성
 *  - 제공된 논스를 입력 문자열과 연결하고 generateHash() 를 호출한다.
 *
 * 3. mine() 함수 작성
 *  - 생성된 해시값이 0000으로 시작할 때까지 반복문 내에서 calculateHashWithNonce()를 호출한다.
 */

import * as crypto from 'crypto';
let nonce = 0;
const test = false;

async function generateHash(input: string): Promise<string> {
  if (test) {
    //1초 미만
    return crypto.createHash('sha256').update(input).digest('hex');
  }
  /**
   * 이 아래 소스가 책에서 알려준 소스코드인데 목적만 보면 위에 한줄만 써도 될 것 같은데
   * 왜 아래와 같이 알려준건지 정확히 모르겠음.
   * 책에 정확한 설명도 부족하고....
   * 결과값도 아래나 위에 한줄이나 똑같은 값을 주는데 처리 속도는 위에 한 줄이 더 빠름.
   */
  //UTF-8로 변환
  const msgBuffer = new TextEncoder().encode(input);
  //메세지의 해시값 구함
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  //ArrayBuffer에서 Array로 변환
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  //바이트를 16진수로 변환
  const hashHex = hashArray
    .map(b => ('00' + b.toString(16)).slice(-2))
    .join('');
  // 약2초 걸림
  return hashHex;
}
//0000bfe6af4232f78b0c8eba37a6ba6c17b9b8671473b0b82305880be077edd9

async function calculateHashWithNonce(nonce: number): Promise<string> {
  const data = 'Hello World' + nonce;
  return generateHash(data);
}

async function mine(): Promise<void> {
  let hash: string;
  console.time('mine');
  do {
    hash = await calculateHashWithNonce(++nonce);
  } while (hash.startsWith('0000') === false);
  console.log(`Hash: ${hash}, nonce: ${nonce}`);
  console.timeEnd('mine');
}

mine();
