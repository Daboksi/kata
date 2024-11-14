const readMoreButton = document.querySelector('.readmore__button');
const hiddenText = document.querySelector('.company__text2');

readMoreButton.addEventListener('click', () => {
  readMoreButton.classList.add('show-text');
  hiddenText.classList.add('show-text');
});