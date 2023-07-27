export async function sha256(data: string): Promise<string> {
  const byteArray = new TextEncoder().encode(data);
  const hashAsByteArray = await crypto.subtle.digest('SHA-256', byteArray);
  const hashAsArrayOfNumber = Array.from(new Uint8Array(hashAsByteArray));

  // 각 숫자를 16진수 문자열로 변환합니다,
  // 각 16진수를 정규화하므로 두 개의 기호로 구성됩니다.
  return hashAsArrayOfNumber
    .map((b) => '00' + b.toString(16).slice(-2))
    .join('');
}

/** UUID 생성 샘플 구현입니다 */
export function uuid(): string {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}
