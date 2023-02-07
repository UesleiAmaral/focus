export const Add = () => {
  const addHide = (image01, image02, image03) => {
    image01.classList.add('hide');
    image02.classList.add('hide');
    image03.classList.add('hide');

  }

  const addSelect = (image) => {
    image.classList.add('select');

  }

  return {
    addHide,
    addSelect

  }

}