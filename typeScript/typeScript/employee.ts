class Person10 {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

 
     public get age() {
        return this._age;
    }

     public set age(theAge: number) {
        this._age = theAge;
    }
}


let p = new Person10();
console.log(p.age = 10);

