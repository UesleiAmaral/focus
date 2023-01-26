import { Elements } from '/module/Elements.js';
import { Controls } from '/module/Controls.js';
import { Cards } from '/module/Cards.js'


const {
  play,
  pause,
  stop,
  setting,
  timeUp,
  timeDown,
  soundOn,
  soundOff

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

Elements.buttonPlay.addEventListener('click', (event) => {
  event.preventDefault();
  play();

});

Elements.buttonPause.addEventListener('click', (event) => {
  event.preventDefault();
  pause();

});

Elements.buttonSetting.addEventListener('click', (event) => {
  event.preventDefault();
  setting();

});

Elements.buttonStop.addEventListener('click', (event) => {
  event.preventDefault();
  stop();

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