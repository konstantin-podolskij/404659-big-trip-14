import {TYPES, DESTINATIONS, MAX_PRICE, MOCK_TEXT} from '../utils/constants.js';
import dayjs from 'dayjs';
import {getRandomInteger, getRandomElement} from '../utils/utils.js';

const OPTIONS = [
  {
    title: 'Add luggage',
    price: 30,
  },
  {
    title: 'Switch to comfort',
    price: 100,
  },
  {
    title: 'Book tickets',
    price: 40,
  },
  {
    title: 'Lunch in city',
    price: 30,
  },
  {
    title: 'Rent a car',
    price: 200,
  },
  {
    title: 'Add meal',
    price: 15,
  },
  {
    title: 'Choose seats',
    price: 5,
  },
  {
    title: 'Order Uber',
    price: 20,
  },
];

const photoSettings = {
  minQuantity: 1,
  maxQuantity: 5,
  maxSrcNumber: 100,
  src: 'http://picsum.photos/248/152?r',
};

const descriptionSettings = {
  sentenceMin: 1,
  sentenceMax: 5,
  mockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus',
};

const timeMaxGap = {
  seconds: 60,
  minutes: 60,
  hours: 24,
  days: 30,
};

function generateRandomFutureDate(startDate) {
  return dayjs(startDate)
    .add(getRandomInteger(0, timeMaxGap.days), 'day')
    .add(getRandomInteger(0, timeMaxGap.hours), 'hour')
    .add(getRandomInteger(0, timeMaxGap.minutes), 'minute')
    .add(getRandomInteger(0, timeMaxGap.seconsds), 'second')
    .format('YYYY-MM-DD HH:mm:ss');
}

function generatePhotos(photoSettings) {
  const randomIndex = getRandomInteger(photoSettings.minQuantity, photoSettings.maxQuantity);
  const photos = new Array(randomIndex).fill().map(() => photoSettings.src + getRandomInteger(0, photoSettings.maxSrcNumber));

  return photos;
}

function generateOptions(options) {
  const randomQuantity = getRandomInteger(0, options.length - 1);
  const randomOptions = new Array(randomQuantity).fill().map(() => getRandomElement(options));

  return randomOptions;
}

function generateDescription() {
  const mockTexts = MOCK_TEXT.split('.');
  const sentenceCount = getRandomInteger(descriptionSettings.sentenceMin, descriptionSettings.sentenceMax);
  let description = '';

  for (let i = 1; i <= sentenceCount; i++) {
    description += getRandomElement(mockTexts) + '.';
  }

  return description;
}

function generateDate() {
  const dateFrom = generateRandomFutureDate();
  const dateTo = generateRandomFutureDate(dateFrom);

  const date = {
    from: dateFrom,
    to: dateTo,
  };

  return date;
}

export const generatePoint= () => {
  return {
    offer:{
      type: getRandomElement(TYPES),
      options: generateOptions(OPTIONS),
    },
    destination: {
      description: generateDescription(),
      name: getRandomElement(DESTINATIONS),
      pictures: generatePhotos(photoSettings),
    },
    data: {
      date: generateDate(),
      price: getRandomInteger(0, MAX_PRICE),
      is_favorite: Boolean(getRandomInteger(0, 1)),
    },
  };
};
