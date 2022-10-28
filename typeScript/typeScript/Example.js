var Person1 = /** @class */ (function () {
    function Person1(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person1;
}());
var xyz = new Person1('7924087', 'pooja', 'sg');
console.log(xyz.getFullName());
var Person2 = /** @class */ (function () {
    function Person2(birthDate) {
        this.birthDate = birthDate;
    }
    return Person2;
}());
var person3 = new Person2(new Date());
console.log(person3);
var Person4 = /** @class */ (function () {
    function Person4(birthDate) {
        this.birthDate = birthDate;
        this.birthDate = birthDate;
    }
    return Person4;
}());
var person6 = new Person4(new Date(1998, 7, 30));
console.log(person6);
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var emp = new Employee();
emp.age = 60;
emp.firstName = "pooj";
emp.lastName = "sg";
console.log(emp);
var Employee2 = /** @class */ (function () {
    function Employee2(_age, _firstName, _lastName) {
        this._age = _age;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Employee2.prototype, "age1", {
        get: function () {
            return this._age;
        },
        set: function (theage) {
            this._age = theage;
        },
        enumerable: false,
        configurable: true
    });
    return Employee2;
}());
var emp1 = new Employee2(20, "pooja", "sg");
emp1.age1 = 20;
console.log(emp1.age1);
