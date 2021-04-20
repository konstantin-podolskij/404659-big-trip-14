import Abstract from '../view/abstract.js';
import {InsertPlace} from './constants.js';

export const render = (container, child, place) => {

  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (place) {
    case InsertPlace.AFTER_BEGIN:
      container.prepend(child);
      break;
    case InsertPlace.BEFORE_END:
      container.append(child);
      break;
  }
};
