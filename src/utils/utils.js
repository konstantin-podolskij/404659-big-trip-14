import {InsertPlace} from './constants.js';

export const renderElement = (container, element, place) => {
  switch (place) {
    case InsertPlace.AFTER_BEGIN:
      container.prepend(element);
      break;
    case InsertPlace.BEFORE_END:
      container.append(element);
      break;
   }
 };

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElement = (arr) => {
  const index = getRandomInteger(0, arr.length - 1);

  return arr[index];
};
