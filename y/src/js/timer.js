export class Timer {
    constructor(workDuration, breakDuration, longBreakDuration) {
      this.workDuration = workDuration;
      this.breakDuration = breakDuration;
      this.longBreakDuration = longBreakDuration;
      this.timeLeft = workDuration;
      this.isRunning = false;
      this.timerInterval = null;
      this.workSessions = 0;
      this.isWorkMode = true;
    }
  
    start(callback) {
      if (!this.isRunning) {
        this.isRunning = true;
        this.timerInterval = setInterval(() => {
          if (this.timeLeft > 0) {
            this.timeLeft--;
            callback(this.timeLeft, this.isWorkMode);
          } else {
            clearInterval(this.timerInterval);
            this.isRunning = false;
            if (this.isWorkMode) {
              this.workSessions++;
            }
            this.isWorkMode = !this.isWorkMode;
            this.timeLeft = this.isWorkMode
              ? this.workDuration
              : this.workSessions % 4 === 0
              ? this.longBreakDuration
              : this.breakDuration;
            callback(this.timeLeft, this.isWorkMode);
            this.start(callback);
          }
        }, 1000);
      }
    }
  
    pause() {
      if (this.isRunning) {
        clearInterval(this.timerInterval);
        this.isRunning = false;
      }
    }
  
    reset() {
      clearInterval(this.timerInterval);
      this.isRunning = false;
      this.workSessions = 0;
      this.isWorkMode = true;
      this.timeLeft = this.workDuration;
    }
  }