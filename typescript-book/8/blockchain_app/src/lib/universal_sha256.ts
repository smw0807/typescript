//Node.js 런타임에서 사용되는 함수
function sha256_node(data: string): Promise<string> {
  const crypto = require('crypto');
  //SHA-256 해시를 생성한다.
  return Promise.resolve(
    crypto.createHash('sha256').update(data).digest('hex')
  );
}

//웹 브라우저에서 사용되는 함수
async function sha256_browser(data: string): Promise<string> {
  // console.group('sha256_browser');
  //UTF-8 형식으로 문자열을 인코딩한다.
  const msgUint8Array = new TextEncoder().encode(data);
  // console.info('msgUint8Array : ', msgUint8Array);

  //데이터를 해시한다.
  const hashByteArray = await crypto.subtle.digest('SHA-256', msgUint8Array);
  // console.info('hashByteArray : ', hashByteArray);

  //ArrayBuffer에서 Array로 변환한다.
  const hashArray = Array.from(new Uint8Array(hashByteArray));
  // console.info('hashArray : ', hashArray);

  //byte에서 16진수 문자열로 변환한다.
  const hashHex = hashArray
    .map(b => ('00' + b.toString(16)).slice(-2))
    .join('');
  // console.info('hashHex : ', hashHex);
  // console.groupEnd();
  return Promise.resolve(hashHex);
}

//런타임이 window 전역 변수의 존재를 확인하여 브라우저 환경인지 확인한다.
export const sha256 =
  typeof window === 'undefined' ? sha256_node : sha256_browser;
