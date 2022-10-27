
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

let name1:string="pooja";
let age:number=24;
let active:boolean=true;

console.log(name1);
console.log(age);
console.log(active);


let greeting:(name:string)=>string;

greeting = function(name:string){
    return `hi ${name}`;
};

console.log(greeting);


let array1:string[]=["name1","name2","name3"];
console.log(array1);

let person:{
    name:string,
    age:number
};

person={
    name:"pooja",
    age:24

};
console.log(person);

let counter:number=0;
function setCounter(max=100) {
    // ...
}
let count=function increment(counter:number){
    return counter++;
}
console.log(count);

let items = [0, 1, null, 'Hi'];
console.log(typeof(items));


let description = `This TypeScript string can span multiple lines`;
console.log(description)

let firstName:string="pooja";
let lastName:string="S G";
let fullName:string=`my fullName is ${firstName} ${lastName}`;
console.log(fullName); 


let employee:object;
employee={
    name:"pooja",
    dob:"19-07-1998",
    sal:25000
};
console.log(employee);


let skills:string[];
skills=['software Developer','programmer'];
console.log(skills);
skills[0]='problem solving';
console.log(skills);
skills.push('software Developer');
console.log(skills);


let series:number[];
series=[1,2,3,4];
console.log(series);
let doubleIt=series.map(e=>e*2);
console.log(doubleIt);


enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
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

console.log(isItSummer(Month.Sep)); // true

