import {getRandomPositiveInteger} from './util.js';

const CARDS_COUNT = 25;
const COMMENTS_COUNT = 2;
const AVATAR_MIN_COUNT = 15;
const AVATAR_MAX_COUNT = 100;
const ID_COMMENT_MIN_COUNT = 1;
const ID_COMMENT_MAX_COUNT = 200;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 100;

const FOTO_TITLES = [
  'Отель',
  'Дорога на пляж',
  'Пляж',
  'Девушка с фотоаппаратом',
  'Рисовая похлебка',
  'Черный автомобиль',
  'Клубничка',
  'Напиток',
  'Самолет',
  'Обувной шкаф',
  'Тропинка на пляж',
  'Автомобиль Audi',
  'Салат',
  'Сушикот',
  'Робоваленки',
  'Самолет над облаками',
  'Хор',
  'Автомобиль Бьюик',
  'Тапочки с фонариком',
  'Отель ночью',
  'Теплый салат',
  'Закат',
  'Краб',
  'Концерт',
  'Кто больше?',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];


const createComments = function(count) {
  const data = [];

  for (let i=1; i<=count; i++){
    const comment = {
      id:  getRandomPositiveInteger(ID_COMMENT_MIN_COUNT, ID_COMMENT_MAX_COUNT),
      avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg.`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length -1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],

    };
    data.push(comment);
  }
  return data;
};

const createCards = function(count) {
  const data = [];

  for (let i=1; i<=count; i++){
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: FOTO_TITLES[i-1],
      likes: getRandomPositiveInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
      comments: createComments(COMMENTS_COUNT),
    };

    data.push(photo);
  }
  return data;
};

export {createCards};
export {CARDS_COUNT};
