export let Minutes;

export const Controls = ({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSetting,
  buttonTimeUp,
  buttonTimeDown,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay

}) => {
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);

  const play = () => {
    buttonPause.classList.remove('hide');
    buttonPlay.classList.add('hide');

  };

  const pause = () => {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');

  };

  const stop = () => {
    buttonSetting.classList.remove('hide');
    buttonStop.classList.add('hide');

  };

  const setting = () => {
    buttonStop.classList.remove('hide');
    buttonSetting.classList.add('hide');
  };

  const timeUp = () => {
    seconds += 5;

    if (seconds > 55) {
      seconds = 0;
      minutes += 1;

    };

    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;

  };

  const timeDown = () => {
    seconds -= 5;

    if (seconds < 0) {
      seconds = 55;
      minutes -= 1;

    };

    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = seconds;

  };

  const soundOn = () => {
    buttonSoundOff.classList.remove('hide');
    buttonSoundOn.classList.add('hide');
  };

  const soundOff = () => {
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');

  };

  const resetControls = () => {
    buttonPlay.classList.remove('hide');
    buttonSetting.classList.remove('hide');

    buttonPause.classList.add('hide');
    buttonStop.classList.add('hide');

  };

  const updateDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');


  }

  return {
    play,
    pause,
    stop,
    setting,
    timeUp,
    timeDown,
    soundOn,
    soundOff,
    resetControls,
    updateDisplay

  }
}