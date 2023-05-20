enum Select {
  '카카오' = 'kakao',
  '스팀' = 'steam',
}

const selectOptions = [
  { label: Select['카카오'], value: Select.카카오 },
  { label: Select['스팀'], value: Select.스팀 },
];
console.log(selectOptions);
console.log('-------');
console.log(`1: ${selectOptions[0].label} = ${selectOptions[0].value}`);
console.log(`2: ${selectOptions[1].label} = ${selectOptions[1].value}`);
