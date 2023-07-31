import { render } from '../../node_modules/lit-html/lit-html.js';
import { Application } from './ui/application.js';

let renderingIsInProgress = false;
let application = new Application(async () => {
  // 두 개의 후속 렌더링 호출이 도착하면 첫 번째 렌더링 호출만 if 문을 통과합니다.
  // 그러나 두 번의 후속 호출 간에 수행된 변경 사항은 lit-html에 의해 픽업됩니다
  // wait 0 이후에 호출된 'render()' 호출은 가장 최근의 상태를 반영합니다.
  if (!renderingIsInProgress) {
    renderingIsInProgress = true;
    await 0;
    renderingIsInProgress = false;
    render(application.render(), document.body);
  }
});
