import { Elements } from '/module/Elements.js';
import { Events } from './module/Event.js';

const {
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

} = Events({
  buttonPlay: Elements.buttonPlay,
  buttonPause: Elements.buttonPause,
  buttonStop: Elements.buttonStop,
  buttonSetting: Elements.buttonSetting,
  buttonTimeUp: Elements.buttonTimeUp,
  buttonTimeDown: Elements.buttonTimeDown,
  buttonSoundOn: Elements.buttonSoundOn,
  buttonSoundOff: Elements.buttonSoundOff,
  cardFloresta: Elements.cardFloresta,
  cardNoite: Elements.cardNoite,
  cardMar: Elements.cardMar,
  cardChuva: Elements.cardChuva

 });

eventButtonPlay();
eventButtonPause();
eventButtonSetting();
eventButtonStop();
eventSoundOn();
eventSoundOff();
eventTimeUp();
eventTimeDown();
eventCardFloresta();
eventCardNoite();
eventCardMar();
eventCardChuva();