class Person1{
    ssn;
    firstName;
    lastName;

    constructor(ssn,firstName,lastName){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let xyz =new Person1('7924087','pooja','sg');
console.log(xyz.getFullName()); 


class Person2{
    readonly birthDate:Date;
    constructor(birthDate:Date){
        this.birthDate=birthDate;
    }
}

let person3 = new Person2(new Date());
console.log(person3);


class Person4{
    constructor(readonly birthDate:Date){
        this.birthDate=birthDate;
    }
}
let person6= new Person4(new Date(1998,7,30));
console.log(person6);





class Employee{
    public age:Number;
    public firstName:string;
    public lastName:string;
}

let emp = new Employee();
emp.age=60;
emp.firstName="pooj";
emp.lastName="sg";
console.log(emp);


class Employee2{
    private _age:number;
    private _firstName:string;
    private _lastName:string;

    constructor(_age,_firstName,_lastName){
        this._age=_age;
        this._firstName=_firstName;
        this._lastName=_lastName;
    }

    public set age1(theage:number){
        this._age=theage;
    }

    public get age1():number{
        return this._age;
    }
   
}

let emp1 = new Employee2(20,"pooja","sg");
emp1.age1=20;

console.log(emp1.age1);
