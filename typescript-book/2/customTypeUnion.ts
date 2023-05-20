export class SearchAction { // 액션 타입과 페이로드가 있는 클래스
  actionType = 'SEARCH';
  constructor(readonly payload: { searchQuery: string}) {

  }
}

export class SearchSuccessAction{
  [1]
  actionType = 'SEARCH_SUCCESS';
  constructor(public payload: { searchResults: string[] }){

  }
}

export class SearchFailedAction { // 액션 타입은 있지만 페이로드가 없는 클래스
  actionType = 'SEARCH_FAILED';
}

export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction; //유니온 타입 설정