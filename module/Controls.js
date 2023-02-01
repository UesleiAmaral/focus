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
  secondsDisplay,
  modalSetting,
  modalMinutes,
  modalButton

}) => {


  const play = () => {
    buttonPause.classList.remove('hide');
    buttonPlay.classList.add('hide');

    buttonTimeUp.disabled = true;
    buttonTimeDown.disabled = true;

  };

  const pause = () => {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    buttonTimeUp.disabled = false;
    buttonTimeDown.disabled = false;


  };

  const stop = () => {
    buttonSetting.classList.add('hide');
    buttonStop.classList.remove('hide');

  };

  const setting = () => {
    modalSetting.classList.remove('hide');

    modalButton.addEventListener('click', (event) => {
      event.preventDefault();
      minutesDisplay.textContent = String(modalMinutes.value).padStart(2, '0');
      modalSetting.classList.add('hide');

    })

    modalMinutes.value = "";

  };

  const timeUp = () => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    seconds += 5;

    if (seconds >= 60) {
      seconds = seconds - 60;
      minutes += 1;

    };
    updateDisplay(minutes, seconds);

  };

  const timeDown = () => {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    seconds -= 5;

    if (seconds < 0) {
      seconds = seconds + 60;
      minutes -= 1;

    };
    updateDisplay(minutes, seconds);

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
    buttonTimeUp.disabled = false;
    buttonTimeDown.disabled = false;

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