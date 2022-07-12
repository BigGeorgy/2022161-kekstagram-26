const CARDS_COUNT = 25;
const COMMENTS_COUNT = 2;
const avatarMinCount = 15;
const avatarMaxCount = 100;
const idCommentMinCount = 1;
const idCommentMaxCount = 200;
const likesMinCount = 15;
const likesMaxCount = 100;

function returnRandomNumber(min, max){
  if(max>min&&min>=0){
    const r = Math.random()*(max-min) + min;
    return Math.floor(r);
  }
  else{
    return 'none';
  }
}

returnRandomNumber(0, 100);

function stringLength (stringTest, maxStringLength){
  if (stringTest.length<=maxStringLength){
    return true;
  }
  else {
    return false;
  }
}
stringLength('длина комментария не может составлять больше 140 символов', 140);

const fotoTitles = [
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

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComments = function(count) {
  const data = [];

  for (let i=1; i<=count; i++){
    const comment = {
      id:  getRandomPositiveInteger(idCommentMinCount, idCommentMaxCount),
      avatar: `img/avatar-${getRandomPositiveInteger(avatarMinCount, avatarMaxCount)}.svg.`,
      message: messages[getRandomPositiveInteger(0, messages.length -1)],
      name: names[getRandomPositiveInteger(0, names.length - 1)],

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
      description: fotoTitles[i-1],
      likes: getRandomPositiveInteger(likesMinCount, likesMaxCount),
      comments: createComments(COMMENTS_COUNT),
    };

    data.push(photo);
  }
  return data;
};

createCards(CARDS_COUNT);

