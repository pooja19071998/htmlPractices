class Person{
    constructor(private firstName:string, private lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`; 
    }
    discribe(){
        return `this is ${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person{
    constructor(firstName:string,lastName:string,private jobTitle:string){
            super(firstName,lastName);
        }       
}

let emp = new Employee('john','Doe','Font-end developer');
console.log(emp.getFullName());
console.log(emp.discribe());
