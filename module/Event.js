import { Controls, Minutes } from '/module/Controls.js';
import { Elements } from '/module/Elements.js';
import { Countdown, TimerTimeout } from '/module/Timer.js';
import { Sound } from '/module/Sounds.js';

import { Cards } from '/module/Cards.js'

let isOff;

const {
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

} = Controls({

  buttonPlay: Elements.buttonPlay,
  buttonPause: Elements.buttonPause,
  buttonStop: Elements.buttonStop,
  buttonSetting: Elements.buttonSetting,
  buttonTimeUp: Elements.buttonTimeUp,
  buttonTimeDown: Elements.buttonTimeDown,
  buttonSoundOn: Elements.buttonSoundOn,
  buttonSoundOff: Elements.buttonSoundOff,

  minutesDisplay: Elements.minutesDisplay,
  secondsDisplay: Elements.secondsDisplay,

  modalSetting: Elements.modalSetting,
  modalMinutes: Elements.modalMinutes,
  modalButton: Elements.modalButton

});

const {
  soundFloresta,
  soundNoite,
  soundChuva,
  soundMar,
  musicOff

} = Sound();

const {
  bgCardFloresta,
  bgCardNoite,
  bgCardMar,
  bgCardChuva,

} = Cards({
  cardFloresta: Elements.cardFloresta,
  cardMar: Elements.cardMar,
  cardChuva: Elements.cardChuva,
  cardNoite: Elements.cardNoite,

  imageNoite: Elements.imageNoite,
  imageFloresta: Elements.imageFloresta,
  imageChuva: Elements.imageChuva,
  imageMar: Elements.imageMar,

  soundFloresta,
  soundNoite,
  soundChuva,
  soundMar

});

const {
  countDown,
  resetTimer

} = Countdown({
  minutesDisplay: Elements.minutesDisplay,
  secondsDisplay: Elements.secondsDisplay,

  resetControls,
  updateDisplay,

  Minutes,

});

export const Events = ({
  buttonPlay,
  buttonPause,
  buttonSetting,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  buttonTimeUp,
  buttonTimeDown,

  cardFloresta,
  cardNoite,
  cardMar,
  cardChuva

}) => {

  const eventButtonPlay = () => {
    buttonPlay.addEventListener('click', (event) => {
      event.preventDefault();
      play();
      stop();
      countDown();

    });
  };

  const eventButtonPause = () => {
    buttonPause.addEventListener('click', (event) => {
      event.preventDefault();
      pause();
      clearTimeout(TimerTimeout);

    });
  };

  const eventButtonSetting = () => {
    buttonSetting.addEventListener('click', (event) => {
      event.preventDefault();
      setting();

    });
  };

  const eventButtonStop = () => {
    buttonStop.addEventListener('click', (event) => {
      event.preventDefault();
      resetControls();
      resetTimer();

    });
  };

  const eventSoundOn = () => {
    buttonSoundOn.addEventListener('click', (event) => {
      event.preventDefault();
      soundOn();
      musicOff();
      isOff = true;

      return isOff;

    });
  };

  const eventSoundOff = () => {
    buttonSoundOff.addEventListener('click', (event) => {
      event.preventDefault();
      soundOff();

      isOff = false;

      if (Elements.cardMar.classList[2] == 'select') {
        soundMar();

      } else if (Elements.cardNoite.classList[2] == 'select') {
        soundNoite();

      } else if (Elements.cardFloresta.classList[2] == 'select') {
        soundFloresta();

      } else if (Elements.cardChuva.classList[2]) {
        soundChuva();
      }

      return isOff;

    });
  };

  const eventTimeUp = () => {
    buttonTimeUp.addEventListener('click', (event) => {
      event.preventDefault();
      timeUp();

    });
  };

  const eventTimeDown = () => {
    buttonTimeDown.addEventListener('click', (event) => {
      event.preventDefault();
      timeDown();

    });
  };

  const eventCardFloresta = () => {
    cardFloresta.addEventListener('click', (event) => {
      bgCardFloresta();
      off();

    });
  };

  const eventCardNoite = () => {
    cardNoite.addEventListener('click', (event) => {
      bgCardNoite();
      off();

    });
  };

  const eventCardMar = () => {
    cardMar.addEventListener('click', (event) => {
      bgCardMar();
      off();

    });
  };

  const eventCardChuva = () => {
    cardChuva.addEventListener('click', (event) => {
      bgCardChuva();
      off();

    });
  };

  const off = () => {
    if (isOff === true) {
      musicOff();

    }
  };

  return {
    eventButtonPlay,
    eventButtonPause,
    eventButtonSetting,
    eventButtonStop,
    eventSoundOn,
    eventSoundOff,
    eventTimeUp,
    eventTimeDown,

    eventCardFloresta,
    eventCardNoite,
    eventCardMar,
    eventCardChuva

  };
};