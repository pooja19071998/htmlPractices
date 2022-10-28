class Person10 {
    get age() {
        return this._age;
    }
    set age(theAge) {
        this._age = theAge;
    }
}
let p = new Person10();
console.log(p.age = 10);
