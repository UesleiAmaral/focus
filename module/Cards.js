import { Add } from '/module/Add.js';
import { Remove } from '/module/Remove.js';

const { addHide, addSelect } = Add();
const { removeHide, removeSelect } = Remove();

export const Cards = ({
  cardFloresta,
  cardMar,
  cardNoite,
  cardChuva,

  imageMar,
  imageChuva,
  imageNoite,
  imageFloresta,

  soundFloresta,
  soundNoite,
  soundChuva,
  soundMar

}) => {

  const bgCardFloresta = () => {
    addHide(imageNoite, imageMar, imageChuva);
    removeHide(imageFloresta);

    addSelect(cardFloresta);
    removeSelect(cardNoite, cardMar, cardChuva);
    soundFloresta();

  };

  const bgCardMar = () => {
    addHide(imageFloresta, imageNoite, imageChuva);
    removeHide(imageMar);

    addSelect(cardMar);
    removeSelect(cardFloresta, cardNoite, cardChuva);
    soundMar();

  };

  const bgCardChuva = () => {
    addHide(imageFloresta, imageMar, imageNoite);
    removeHide(imageChuva);

    addSelect(cardChuva);
    removeSelect(cardFloresta, cardMar, cardNoite);
    soundChuva();

  };

  const bgCardNoite = () => {
    addHide(imageFloresta, imageMar, imageChuva);
    removeHide(imageNoite);

    addSelect(cardNoite);
    removeSelect(cardFloresta, cardMar, cardChuva);
    soundNoite();

  };

  return {
    bgCardFloresta,
    bgCardMar,
    bgCardChuva,
    bgCardNoite,
  };

};