export let TimerTimeout;
export const Countdown = ({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  updateDisplay,
  Minutes,

}) => {

  const countDown = () => {
    TimerTimeout = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        resetControls();
        resetTimer();

        return;

      };

      if (seconds <= 0) {
        seconds = 60;
        --minutes;

      };

      updateDisplay(minutes, seconds - 1);

      countDown();
    }, 1000);
  }

  const resetTimer = () => {

    if (Minutes == undefined) {
      updateDisplay(0, 0);

    } else {
      updateDisplay(Minutes, 0);

    }

    clearTimeout(TimerTimeout);

  }

  return {
    countDown,
    resetTimer
  }


}