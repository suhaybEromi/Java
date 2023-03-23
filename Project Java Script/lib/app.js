let numSquare = 12;
let colors = getColors(numSquare);
let rightAnswer = pickColor()

const h1 = document.querySelector('h1');
const rgb = document.querySelector('#rgb');
const reset = document.querySelector('button');
const trey = document.querySelector('#try');
const easy = document.querySelector('#easy');
const hard = document.querySelector('#hard');
const veryHard = document.querySelector('#veryHard');
const chwargosha = document.querySelectorAll('.square');

rgb.textContent = rightAnswer;

start()

function start() {
    hard.classList.remove("easyHard")
    veryHard.classList.add("easyHard")
    easy.classList.remove("easyHard")
    numSquare = 12;
    colors = getColors(numSquare);
    rightAnswer = pickColor()
    rgb.textContent = rightAnswer;
    for (let i = 0; i < chwargosha.length; i++) {
        if (colors[i]) {
            chwargosha[i].style.display = "block";
            chwargosha[i].style.background = colors[i]
        } else {
            chwargosha[i].style.display = "none";
        }
    }
    h1.style.background = "orangered"
    reset.textContent = "New Color"
    tray.textContent = "";
}
// EASY EASY EASY... 
easy.addEventListener("click", () => {
    hard.classList.remove("easyHard")
    veryHard.classList.remove("easyHard")
    easy.classList.add("easyHard")
    numSquare = 3;

    colors = getColors(numSquare);
    rightAnswer = pickColor()
    rgb.textContent = rightAnswer;
    for (let i = 0; i < chwargosha.length; i++) {
        if (colors[i]) {
            chwargosha[i].style.display = "block";
            chwargosha[i].style.background = colors[i]
        } else {
            chwargosha[i].style.display = "none";
        }
    }
    h1.style.background = "orangered"
    reset.textContent = "New Color"
    tray.textContent = ""
})


// HARD HARD HARD...
hard.addEventListener("click", () => {
    hard.classList.add("easyHard")
    veryHard.classList.remove("easyHard")
    easy.classList.remove("easyHard")
    numSquare = 6;
    colors = getColors(numSquare);
    rightAnswer = pickColor()
    rgb.textContent = rightAnswer;
    for (let i = 0; i < chwargosha.length; i++) {
        if (colors[i]) {
            chwargosha[i].style.display = "block";
            chwargosha[i].style.background = colors[i]
        } else {
            chwargosha[i].style.display = "none";
        }
    }
    h1.style.background = "orangered"
    reset.textContent = "New Color"
    tray.textContent = ""
})


// VERY HARD VERY HARD VERY HARD...
veryHard.addEventListener("click", start)
reset.addEventListener("click", () => {
    colors = getColors(numSquare);
    rightAnswer = pickColor();
    rgb.textContent = rightAnswer;
    for (let i = 0; i < chwargosha.length; i++) {
        chwargosha[i].style.background = colors[i];
    }
    h1.style.background = "orangered";
    reset.textContent = "New Color";
    tray.textContent = "";
})
for (let i = 0; i < chwargosha.length; i++) {
    chwargosha[i].addEventListener("click", function () {
        const clicked = this.style.background;
        if (clicked === rightAnswer) {
            tray.textContent = "Correct!!";
            reset.textContent = "Try Again";
            h1.style.background = rightAnswer;
            for (let j = 0; j < chwargosha.length; j++) {
                chwargosha[j].style.background = rightAnswer;
            }
        } else {
            tray.textContent = "Wrong";
            this.style.background = "#232323";
        }
    })
}
function pickColor() {
    const pickedcolor = Math.floor(Math.random() * colors.length)
    return colors[pickedcolor];
}
function getColors(num) {
    const arr = []
    for (let i = 0; i < num; i++) {
        arr.push(getRandomColors())
    }
    return arr;
}
function getRandomColors() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return ('rgb(' + r + ',' + g + ',' + b + ')')
}
