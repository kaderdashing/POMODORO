const Time = document.querySelector(".work-timer");
const img = document.querySelectorAll("img");

var workTimer;
var Workseconde = 60;
var workminutes = 29;

//workside
function workTime() {
    breakTimerDisplay.textContent = "5:00";

    Workseconde--;
    workTimer = setTimeout(workTime, 1000);

    if (Workseconde < 1) {
        Workseconde = 60;
        workminutes--;
    }
    if (Workseconde < 10) {
        Workseconde = `0${Workseconde}`;
    }

    if (workminutes === 0) {
        clearTimeout(workTimer);
        Workseconde = `00`;
        workminutes === 00;
        breakSecondes = 60;
        breakminutes = 4;
        breakTime();
    }
    Time.textContent = `${workminutes}:${Workseconde}`;
}

var breakSecondes = 60;
var breakminutes = 4;

const getBreak = document.querySelector(".break-timer");
var increment = 1;
const cycle = document.querySelector(".cycle");
var timerBreak;


//breakside
function breakTime() {
    breakSecondes--;

    timerBreak = setTimeout(breakTime, 1000);
    workTimerDisplay.innerHTML = "0:00";
    clearTimeout(workTimer);
    if (breakSecondes < 1) {
        breakSecondes = 60;
        breakminutes--;
    }

    if (breakSecondes < 10) {
        breakSecondes = `0${breakSecondes}`;
    }

    if (breakminutes === 0) {
        clearTimeout(timerBreak);
        breakSecondes = "00";
        Workseconde = 60;
        workminutes = 29;
        workTime();
        cycle.textContent = `Cycle(s):${increment++}`;
    }

    getBreak.textContent = `${breakminutes}:${breakSecondes}`;
}


//buttons
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", handelReset);
const workTimerDisplay = document.querySelector(".work-timer");
const breakTimerDisplay = document.querySelector(".break-timer");

function handelReset() {
    workTimerDisplay.textContent = "30:00";
    breakTimerDisplay.textContent = "5:00";
    isPlaying = false;
    clearTimeout(workTimer);
    clearTimeout(timerBreak);
    img[0].src = "play.svg";
    Workseconde = 60;
    workminutes = 29;
    cycle.textContent = `Cycle(s):0`;
}

const playPauseBtn = document.querySelector(".playbtn");
playPauseBtn.addEventListener("click", playing);
var isPlaying = false;

function playing() {
    if (!isPlaying) {
        workTime();
        isPlaying = true;
        img[0].src = "pause.svg";
    } else {
        clearTimeout(workTimer);
        img[0].src = "play.svg";
        isPlaying = false;
    }
}