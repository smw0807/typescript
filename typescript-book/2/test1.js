var Person = /** @class */ (function () {
    function Person(data) {
        this.id = data.id;
        this.name = data.name;
        this.password = data.password;
        this.age = data.age;
    }
    return Person;
}());
var person = new Person({ id: 'smw', name: 'minwoo', password: '123', age: 5 });
var perons = { id: 'smw', name: 'minwoo', password: '123', age: 5 };
