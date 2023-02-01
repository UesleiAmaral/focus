import { Elements } from '/module/Elements.js';
import { Controls, Minutes } from '/module/Controls.js';
import { Cards } from '/module/Cards.js';
import { Countdown, TimerTimeout } from '/module/Timer.js';

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

Elements.buttonPlay.addEventListener('click', (event) => {
  event.preventDefault();
  play();
  stop();
  countDown();

});

Elements.buttonPause.addEventListener('click', (event) => {
  event.preventDefault();
  pause();
  clearTimeout(TimerTimeout);

});

Elements.buttonSetting.addEventListener('click', (event) => {
  event.preventDefault();
  setting();
  

});

Elements.buttonStop.addEventListener('click', (event) => {
  event.preventDefault();
  resetControls();
  resetTimer();
  
});

Elements.buttonSoundOn.addEventListener('click', (event) => {
  event.preventDefault();
  soundOn();

});

Elements.buttonSoundOff.addEventListener('click', (event) => {
  event.preventDefault();
  soundOff();

});

Elements.buttonTimeUp.addEventListener('click', (event) => {
  event.preventDefault();
  timeUp();

});

Elements.buttonTimeDown.addEventListener('click', (event) => {
  event.preventDefault();
  timeDown();

});

Elements.cardFloresta.addEventListener('click', (event) => {
  bgCardFloresta();

});

Elements.cardNoite.addEventListener('click', (event) => {
  bgCardNoite();

});

Elements.cardMar.addEventListener('click', (event) => {
  bgCardMar();

});

Elements.cardChuva.addEventListener('click', (event) => {
  bgCardChuva();

});


