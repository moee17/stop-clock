let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let timer = document.querySelector(".time");

let secs = 0;
let mins = 0;
let clock = null;

function timeDisplay() {
	secs += 1;

	if (secs > 60) {
		secs = 0;
		mins += 1;
	}

	let s = secs < 10 ? "0" + secs : secs;
	let m = mins < 10 ? "0" + mins : mins;
	timer.innerHTML = `0${mins} :  ${s}`;
}

startBtn.addEventListener("click", () => {
	if (secs <= 0) {
		clock = setInterval(timeDisplay, 1000);
	}
});

stopBtn.addEventListener("click", () => {
	clearInterval(clock);
});

resetBtn.addEventListener("click", () => {
	secs = 0;
	mins = 0;
	clearInterval(clock);
	timer.innerHTML = `${mins} : ${secs}`;
});
