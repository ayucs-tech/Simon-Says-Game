let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "orange"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.querySelector("body").style.backgroundColor="#D2E0FB";

document.addEventListener("mousedown", function () {
    if (started == false) {
        started = true;
        document.querySelector("body").style.backgroundColor="#D2E0FB";
        levelUp();

    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    setTimeout(() => {
        gameFlash(randBtn);
    }, 700);
    
    
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 300);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Click anywhere to start.`;
        document.querySelector("body").style.backgroundColor="red";
      
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}


