import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {DateFormat} from '../utils/constants.js';
import {createElement} from '../utils/utils.js';

dayjs.extend(duration);

const getTimeDifference = (start, end) => {
  const differenceInMs = dayjs(end).diff(dayjs(start));
  const difference = {
    days: dayjs.duration(differenceInMs).days() > 0 ? dayjs.duration(differenceInMs).days() + 'D ' : '',
    hours: dayjs.duration(differenceInMs).hours() > 0 ? dayjs.duration(differenceInMs).hours() + 'H ' : '',
    minutes: dayjs.duration(differenceInMs).minutes() > 0 ? dayjs.duration(differenceInMs).minutes() + 'M' : '',
  };
  return difference.days + difference.hours + difference.minutes;
};

const createPointTemplate = (point) => {
  const {offer, destination, data} = point;
  const timeDifference = getTimeDifference(data.date.from, data.date.to);
  const favoriteClassName  = data.is_favorite ? 'event__favorite-btn--active' : '';

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dayjs(data.date.from).format(DateFormat.FORMAT2)}">${dayjs(data.date.from).format(DateFormat.FORMAT3)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${offer.type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${offer.type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dayjs(data.date.from).format(DateFormat.FORMAT1)}">${dayjs(data.date.from).format(DateFormat.FORMAT4)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dayjs(data.date.to).format(DateFormat.FORMAT1)}">${dayjs(data.date.to).format(DateFormat.FORMAT4)}</time>
        </p>
        <p class="event__duration">${timeDifference}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${data.price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <li class="event__offer">
          <span class="event__offer-title">Add breakfast</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">50</span>
        </li>
      </ul>
      <button class="event__favorite-btn ${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class Point {
  constructor(point) {
    this._point = point;
    this._element = null;
  }

  getTemplate() {
    return createPointTemplate(this._point);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}