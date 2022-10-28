// var s1 = 'string123';
// var ds = document.createElement('h1');
// ds.innerHTML=s1;
// document.body.appendChild(ds);
// let s1:String="abc";
// console.log(s1);
// var str=document.createElement("h1");
// str.innerHTML="kkjlk";
// document.body.appendChild(str);
// let str2=document.querySelector('h2');
// if(str2!=null)
// {
//     str2.innerHTML="abc";
// }
var name1 = "pooja";
var age = 24;
var active = true;
console.log(name1);
console.log(age);
console.log(active);
var greeting;
greeting = function (name) {
    return "hi ".concat(name);
};
console.log(greeting);
var array1 = ["name1", "name2", "name3"];
console.log(array1);
var person;
person = {
    name: "pooja",
    age: 24
};
console.log(person);
var counter = 0;
function setCounter(max) {
    if (max === void 0) { max = 100; }
    // ...
}
var count = function increment(counter) {
    return counter++;
};
console.log(count);
var items = [0, 1, null, 'Hi'];
console.log(typeof (items));
var description = "This TypeScript string can span multiple lines";
console.log(description);
var firstName = "pooja";
var lastName = "S G";
var fullName = "my fullName is ".concat(firstName, " ").concat(lastName);
console.log(fullName);
var employee;
employee = {
    name: "pooja",
    dob: "19-07-1998",
    sal: 25000
};
console.log(employee);
var skills;
skills = ['software Developer', 'programmer'];
console.log(skills);
skills[0] = 'problem solving';
console.log(skills);
skills.push('software Developer');
console.log(skills);
var series;
series = [1, 2, 3, 4];
console.log(series);
var doubleIt = series.map(function (e) { return e * 2; });
console.log(doubleIt);
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(11));
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}
var neverOccur = function () {
    throw new Error('false!');
};
console.log(fn(true));
