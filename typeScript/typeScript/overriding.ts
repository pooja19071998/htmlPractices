class Person1{
    constructor(private firstName:string, private lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    discribe(){
        return `this is ${this.firstName} ${this.lastName} `;
    }
}

class Employee1 extends Person1{
    constructor(firstName:string,lastName:string,private jobTitle:string){
        super(firstName,lastName);
    }

    discribe(): string {
        return super.discribe() + `I'm a ${this.jobTitle} `;
    }
}

let emp1 = new Employee1('pooja','sg','developer');
console.log(emp1.discribe());
