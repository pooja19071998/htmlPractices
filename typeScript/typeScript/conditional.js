var max = 100;
var counter1 = 0;
if (counter1 < max) {
    counter1++;
}
console.log(counter1);
var counter2 = 100;
if (counter2 < max) {
    counter2++;
}
console.log(counter2);
counter1 < max ? counter1++ : counter1 = 1;
console.log(counter1);
// let list=document.querySelector('#list');
// while(list?.firstChild){
//     list.removeChild(list.firstChild);
// }
var products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
    if (products[i].price == 900)
        break;
}
// show the products
//console.log(products[i]);
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
function msg(message) {
    console.log(message.toUpperCase());
}
msg("pooja");
function add1(a, b) {
    return a + b;
}
console.log(add1(20, 20));
var add3;
add3 = function (a, b) {
    return a + b;
};
console.log(add3(10, 10));
var add4 = function (a, b) {
    return a + b;
};
console.log(add4(10, 40));
// let concate1:(a:number,b:number)=>number;
// concate1=(a:string,b:string):number{
//     a.concate(b).length;
// };
function add5(a, b, c) {
    if (typeof (c) !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log("multiplication of three number " + add5(1, 2, 3));
//default parameter
function discount(a, discount) {
    if (discount === void 0) { discount = 0.05; }
    return a * (1 - discount);
}
console.log(discount(100));
function getDay(year, month) {
    if (year === void 0) { year = new Date().getFullYear(); }
    var day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0)) {
                day = 29;
            }
            else {
                day = 28;
            }
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}
console.log(getDay(undefined, 2));
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("total of digits " + getTotal(10, 20, 30, 40));
function add6(a, b) {
    if (typeof (a) == 'number' && typeof (b) == 'number')
        return a + b;
    if (typeof (a) == 'string' && typeof (b) == 'string')
        return a + b;
}
console.log(add6('pooja', 'pooja'));
function add12(a, b) {
    return a + b;
}
console.log(add12(10, 80));
console.log(add12(10, "pooja"));
function sum(a, b, c) {
    if (c != undefined)
        return a + b + c;
    return a + b;
}
console.log(sum(10, 20));
console.log(sum(10, 10, 10));
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
var counter3 = new Counter();
console.log(counter3.count(20));
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
};
var person1 = new Person('6589798', 'john', 'doe');
console.log(person1.getFullName());
