var user = /** @class */ (function () {
    function user(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(user.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "age", {
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var u1 = new user("samsul", 25);
console.log(u1._name);
