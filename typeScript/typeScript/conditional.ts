let max=100;
let counter1=0;
if(counter1<max){
    counter1++;
}
console.log(counter1);

let counter2=100;
if(counter2<max){
counter2++;
}
console.log(counter2);

counter1<max? counter1++ : counter1=1;
console.log(counter1);



// let list=document.querySelector('#list');
// while(list?.firstChild){
//     list.removeChild(list.firstChild);
// }


let products = [
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


function add(a:number,b:number):number{
    return a+b;
}
console.log(add(10,20));

function msg(message:string):void{
    console.log(message.toUpperCase());
}

msg("pooja");

function add1(a:number,b:number){
    return a+b;
}
console.log(add1(20,20));




let add3:(a:number,b:number)=>number;
add3=function(a:number,b:number){
    return a+b;
}

console.log(add3(10,10));

let add4:(a:number,b:number)=>number=
function(a:number,b:number){
    return a+b;
}
console.log(add4(10,40));



// let concate1:(a:number,b:number)=>number;
// concate1=(a:string,b:string):number{
//     a.concate(b).length;
// };

function add5(a:number,b:number,c?:number):number{
    if(typeof(c)!=='undefined'){
        return a*b*c;
    }
    return a*b;
}

console.log("multiplication of three number "+add5(1,2,3));

//default parameter

function discount(a:number,discount:number=0.05):number{
    return a*(1-discount);
}

console.log(discount(100));


function getDay(year:number=new Date().getFullYear(),month:number):number{
    let day=0;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day=31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day=30;
            break;
        case 2:
            if(((year%4==0)&&!(year%100==0))||(year%400==0)){
                day=29;
            }
            else{
                day=28;
            }
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

console.log(getDay(undefined,2));



function getTotal(...numbers:number[]):number{
    let total=0;
    numbers.forEach((num)=>total+=num);
    return total;
}
console.log("total of digits "+getTotal(10,20,30,40));



function add6(a:number|string, b:number|string):any{
    if(typeof(a)=='number' && typeof(b)=='number')
    return a+b;

    if(typeof(a)=='string' && typeof(b)=='string')
    return a+b;
}

console.log(add6('pooja','pooja'));


function add12(a:number,b:number):number;
function add12(a:number,b:string):string;
function add12(a:any,b:any):any{
    return a+b;
}
console.log(add12(10,80));
console.log(add12(10,"pooja"));


function sum(a:number,b:number):number;
function sum(a:number,b:number,c:number):number;
function sum(a:number,b:number,c?:number):number{
    if(c!=undefined)
    return a+b+c;
return a+b;
}

console.log(sum(10,20));
console.log(sum(10,10,10));



class Counter{
    private current:number=0;
    count(): number;
    count(target:number):number[];
    count(target?:number):number|number[]{
        if(target){
            let values=[];
            for(let start=this.current;start<=target;start++){
                values.push(start);
            }
            this.current=target;
            return values;
        }
        return ++this.current;
    }
}
let counter3 = new Counter();

console.log(counter3.count(20));


function Person(ssn,firstName,lastName){
    this.ssn=ssn;
    this.firstName=firstName;
    this.lastName=lastName;
} 
Person.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
}
let person1 = new Person('6589798','john','doe');
console.log(person1.getFullName());






