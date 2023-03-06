//функция для рандомного значения
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const DESCRIPTIONS = ['Хорошее фото', 'Прекрасный вид', 'Отличный ракурс', 'Могло быть лучше' ];
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Павел', 'Серый', 'Артем'];
const commentsId = 7;
let currentCommentId = 0;
const posts = [];

//функция для создания комментария
const getComments = () => {
  const result = [];
  for (let j = 1; j <= getRandomInteger(1, commentsId) ; j++) {
    currentCommentId += 1;
    const comment = {
      id: currentCommentId,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    };

    result.push(comment);
  }
  return result;
};

//функция для создания постов
const makePosts = (number) => {
  for (let i = 1; i <= number; i++){
    const post = {
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      like: getRandomInteger(LIKES_MIN,LIKES_MAX),
      comments: [],
    };

    const comments = getComments();

    post.comments = comments;
    posts.push(post);
  }
};

makePosts(25);
