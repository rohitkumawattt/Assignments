let timer;
let isRunning = false;
let isWorkSession = true;
let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let timeLeft = workDuration;

const timerDisplay = document.getElementById('timer');
const sessionType = document.getElementById('session-type');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

document.getElementById('work-duration').addEventListener('change', updateDurations);
document.getElementById('break-duration').addEventListener('change', updateDurations);

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function updateDurations() {
  workDuration = parseInt(document.getElementById('work-duration').value) * 60;
  breakDuration = parseInt(document.getElementById('break-duration').value) * 60;
  if (isWorkSession) {
    timeLeft = workDuration;
  } else {
    timeLeft = breakDuration;
  }
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
  sessionType.textContent = isWorkSession ? "Work Session" : "Break Session";
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(countdown, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  isWorkSession = true;
  timeLeft = workDuration;
  updateDisplay();
}

function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    updateDisplay();
  } else {
    switchSession();
  }
}

function switchSession() {
  // Optional: play a sound
  // new Audio('sounds/alarm.mp3').play();

  isWorkSession = !isWorkSession;
  timeLeft = isWorkSession ? workDuration : breakDuration;
  updateDisplay();
}
updateDisplay();
