export const Cards = ({
  cardFloresta,
  cardMar,
  cardNoite,
  cardChuva,

  imageMar,
  imageChuva,
  imageNoite,
  imageFloresta

}) => {

  const bgCardFloresta = () => {

    imageNoite.classList.add('hide');
    imageMar.classList.add('hide');
    imageChuva.classList.add('hide');
    imageFloresta.classList.remove('hide');
    cardFloresta.classList.add('select');
    cardNoite.classList.remove('select');
    cardMar.classList.remove('select');
    cardChuva.classList.remove('select');

  };

  const bgCardMar = () => {

    imageFloresta.classList.add('hide');
    imageNoite.classList.add('hide');
    imageChuva.classList.add('hide');

    imageMar.classList.remove('hide');
    cardMar.classList.add('select');

    cardFloresta.classList.remove('select');
    cardNoite.classList.remove('select');
    cardChuva.classList.remove('select');

  };

  const bgCardChuva = () => {
    
    imageFloresta.classList.add('hide');
    imageMar.classList.add('hide');
    imageNoite.classList.add('hide');

    imageChuva.classList.remove('hide');
    cardChuva.classList.add('select');

    cardFloresta.classList.remove('select');
    cardMar.classList.remove('select');
    cardNoite.classList.remove('select');
  };

  const bgCardNoite = () => {

    imageFloresta.classList.add('hide');
    imageMar.classList.add('hide');
    imageChuva.classList.add('hide');

    imageNoite.classList.remove('hide');
    cardNoite.classList.add('select');

    cardFloresta.classList.remove('select');
    cardMar.classList.remove('select');
    cardChuva.classList.remove('select');

  };

  return {
    bgCardFloresta,
    bgCardMar,
    bgCardChuva,
    bgCardNoite,
  }


}