function hashMe(password: number): number {
  const hash = 10 + (password % 2);
  console.log(`Original password : ${password}`);
  console.log(`Hashed value : ${hash}`);
  return hash;
}

hashMe(2);
hashMe(4);
hashMe(6);
hashMe(800);
