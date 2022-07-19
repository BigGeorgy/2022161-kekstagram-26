import {createCards} from './data.js';
import {CARDS_COUNT} from './data.js';

const сards = createCards(CARDS_COUNT);

const pictureBoxElement = document.querySelector('.pictures');
const cardTemplateElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');

makePictureBox(сards);


function makePictureBox(card) {

  const pictureBoxFragment = document.createDocumentFragment();
  card.forEach(({ url, description, likes, comments }) => {
    const cardElement = cardTemplateElement.cloneNode(true);

    cardElement.querySelector('.picture__img').src = url;
    cardElement.querySelector('.picture__img').alt = description;
    cardElement.querySelector('.picture__likes').textContent = likes;
    cardElement.querySelector('.picture__comments').textContent = comments.length;

    pictureBoxFragment.append(cardElement);

  });
  return pictureBoxElement.append(pictureBoxFragment);
}
