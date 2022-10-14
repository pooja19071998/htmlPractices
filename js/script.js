let seconds=00;
let tens=00;
let getSeconds=document.querySelector('.seconds');
let getTens=document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

btnStart.addEventListener('click',()=>{
    tens++;
    if(tens<=9){
        getTens.innerHTML = '0' + tens;
    }
})