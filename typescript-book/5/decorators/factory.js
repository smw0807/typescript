var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//데코레이터 팩토리로 하나의 파라미터를 가진다.
function UIcomponent(html) {
    //데코레이터로 문자열을 출력한다.
    console.log("The decorator received ".concat(html, "\n"));
    return function (target) {
        //데코레이터 함수
        console.log("Someone wants to create a UI component from \n ".concat(target));
    };
}
var Shopper = /** @class */ (function () {
    function Shopper(name) {
        this.name = name;
    }
    Shopper = __decorate([
        UIcomponent('<h1>Hello Decorator!!</h1>')
    ], Shopper);
    return Shopper;
}());
