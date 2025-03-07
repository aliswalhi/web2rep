import { Timer } from './timer.js';
import { playNotification } from './notifications.js';

export class UI {
  constructor() {
    this.timerDisplay = document.getElementById('timer');
    this.statusDisplay = document.getElementById('status');
    this.progressBar = document.getElementById('progress');
    this.startBtn = document.getElementById('start');
    this.pauseBtn = document.getElementById('pause');
    this.resetBtn = document.getElementById('reset');
    this.workInput = document.getElementById('work-duration');
    this.breakInput = document.getElementById('break-duration');

    this.timer = new Timer(25 * 60, 5 * 60, 15 * 60);

    this.startBtn.addEventListener('click', () => this.startTimer());
    this.pauseBtn.addEventListener('click', () => this.timer.pause());
    this.resetBtn.addEventListener('click', () => this.resetTimer());
    this.workInput.addEventListener('change', () => this.setDurations());
    this.breakInput.addEventListener('change', () => this.setDurations());
  }

  startTimer() {
    this.timer.start((timeLeft, isWorkMode) => {
      this.updateDisplay(timeLeft, isWorkMode);
      if (timeLeft === 0) playNotification();
    });
  }

  resetTimer() {
    this.timer.reset();
    this.updateDisplay(this.timer.timeLeft, this.timer.isWorkMode);
  }

  setDurations() {
    const workValue = parseInt(this.workInput.value) || 25;
    const breakValue = parseInt(this.breakInput.value) || 5;
    if (workValue > 0 && breakValue > 0) {
      this.timer.workDuration = workValue * 60;
      this.timer.breakDuration = breakValue * 60;
      this.timer.timeLeft = this.timer.isWorkMode
        ? this.timer.workDuration
        : this.timer.breakDuration;
      this.updateDisplay(this.timer.timeLeft, this.timer.isWorkMode);
    } else {
      alert('Please enter valid positive durations!');
    }
  }

  updateDisplay(timeLeft, isWorkMode) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    this.timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    this.statusDisplay.textContent = isWorkMode
      ? 'Work'
      : this.timer.workSessions % 4 === 0
      ? 'Long Break'
      : 'Break';
    const totalDuration = isWorkMode
      ? this.timer.workDuration
      : this.timer.workSessions % 4 === 0
      ? this.timer.longBreakDuration
      : this.timer.breakDuration;
    const progress = ((totalDuration - timeLeft) / totalDuration) * 100;
    this.progressBar.style.width = `${progress}%`;
  }
}