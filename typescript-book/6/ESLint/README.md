# ESLint

## ESLint에서 타입스크립트를 사용하는 기초적인 방법.

### npm 프로젝트 초기화

`npm init -y`  
-y 옵션은 모든 기본 옵션을 따른다는 뜻으로 기본 설정을 지닌 package.json 파일을 생성한다.

### typescript와 ESLint 설치

`npm i typescript eslint`  
ESLint의 실행파일은 node_modules/.bin 디렉터리에 들어있다.

### .eslintrc.json 생성

`./node_modules/.bin/eslint --init`  
이후 추가 질문이 여러개 나오는데 사용하는 프로젝트에 따라 맞게 설정

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {}
}
```

생성된 .eslintrc.json 모습  
`"eslint:recommended"` : eslint 권장규칙 사용  
`"plugin:@typescript-eslint/recommended"` : eslint에서 타입스크립트 전용 권장 규칙 사용  
`"rules": {}` : 커스텀 규칙 넣는 부분

eslint 권장 규칙은 `node_modules/eslint/conf/replacements.json` 파일에서 확인할 수 있다.  
타입스크립트용 eslint 권장 규칙은 `node_modules/@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended.js` 파일에서 확인할 수 있다.

```javascript
'use strict';
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-setter-return': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'valid-typeof': 'off', // ts(2367)
      },
    },
  ],
};
//# sourceMappingURL=eslint-recommended.js.map
```

eslint-recommended.js 파일 소스코드  
off 또는 0 : 규칙 미적용  
warn 또는 1 : 규칙이 어긋날 경우 경고 발생
error 또는 2 : 규칙이 어긋날 경우 오류 발생

```json
"rules": {
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["off"]
  }
```

.eslintrc.json을 열어서 위와 같은 커스텀 옵션을 추가하면 `console.log('test');;` 이렇게 세미콜론이 2개 들어가도 에러가 뜨지 않는다.  
이렇게 기존 규칙을 덮어쓰거나 새로운 규칙을 추가해서 자신만의 또는 팀원들간의 코딩 스타일을 정해서 사용할 수 있다.
