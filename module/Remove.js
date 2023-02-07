export const Remove = () => {
  const removeSelect = (image01, image02, image03) => {
    image01.classList.remove('select');
    image02.classList.remove('select');
    image03.classList.remove('select');

  }

  const removeHide = (image) => {
    image.classList.remove('hide');

  }

  return {
    removeHide,
    removeSelect

  }
}