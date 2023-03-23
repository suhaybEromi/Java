const h1 = document.querySelector('h1');
const rgb = document.querySelector('rgb');
const reset = document.querySelector('button');
const trey = document.querySelector('#try');
const easy = document.querySelector('#easy');
const hard = document.querySelector('#hard');
const veryHard = document.querySelector('#veryHard');
const chwargosha = document.querySelectorAll('.square');



const colors = getColors(6);
pickColor()
function pickColor(){
    const pickedcolor = Math.floor(Math.random() * getColors.length)
    return pickedcolor;
}
function getColors(num){
    const arr = []
    for(let i = 0 ; i < num ; i++){
        arr.push(getRandomColors())
    }
   return arr;
}

function getRandomColors(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    console.log('rgb(' + r + ',' + g + ',' + b + ')')
}