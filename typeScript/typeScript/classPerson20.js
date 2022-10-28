var Person20 = /** @class */ (function () {
    function Person20() {
    }
    Object.defineProperty(Person20.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Person20.prototype.getFullName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Person20;
}());
