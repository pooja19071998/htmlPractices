function sayHello(){
    console.log("HELLO!")
}
sayHello();

function addTwoNumber(Number1,Number2){
    const res = Number1+Number2;
    console.log(res);
}

addTwoNumber(10,20);


function givenTheSumOfTwoNumber(Number1, Number2){
    const res = Number1 + Number2;
    return res;
}
// var final=givenTheSumOfTwoNumber(20,20);
// console.log(final);
console.log(givenTheSumOfTwoNumber(20,20));

var sayHello = function(){
    console.log("Hello!");
}
sayHello();


var sayHello1= () => {
    console.log("Hello!");
}
sayHello1();


const arr = [10,20,303,40,50];
arr.forEach(function(element){
    console.log(element);
})

arr.forEach((element)=>{
    console.log(element);
})

var ele = (element)=>{
    console.log(element);
}
arr.forEach(ele);


var ele = (element,index)=>{
    console.log(element+" "+index);
}
arr.forEach(ele);

