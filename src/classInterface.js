var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formatUser = function () {
            return "name is ".concat(_this.fullName, " and Age is ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("samsul arefin", 33);
console.log(user.formatUser());
