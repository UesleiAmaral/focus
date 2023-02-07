export const Sound = () => {
  const soundCardFloresta = new Audio("/sounds/Floresta01.mp3");
  const soundCardNoite = new Audio("/sounds/FlorestaNoite.mp3");
  const soundCardChuva = new Audio("/sounds/Chuva.mp3");
  const soundCardMar = new Audio("/sounds/Marebaixa.mp3");

  const soundFloresta = () => {
    soundCardFloresta.play();
    soundCardNoite.pause();
    soundCardMar.pause();
    soundCardChuva.pause();

  };

  const soundNoite = () => {
    soundCardNoite.play();
    soundCardFloresta.pause();
    soundCardMar.pause();
    soundCardChuva.pause();

  };

  const soundChuva = () => {
    soundCardChuva.play();
    soundCardFloresta.pause();
    soundCardNoite.pause();
    soundCardMar.pause();

  };

  const soundMar = () => {
    soundCardMar.play();
    soundCardFloresta.pause();
    soundCardNoite.pause();
    soundCardChuva.pause();

  };

  const musicOff = () => {
    soundCardMar.pause();
    soundCardFloresta.pause();
    soundCardNoite.pause();
    soundCardChuva.pause();


  };

  return {
    soundFloresta,
    soundNoite,
    soundChuva,
    soundMar,
    musicOff

  };
};