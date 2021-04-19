import dayjs from 'dayjs';
import { createElement } from '../utils/utils.js';
import {DESTINATION_POINTS_LIMIT, DateFormat} from '../utils/constants.js';

const createDatesTemplate = (points) => {
  return `${dayjs(points[0].data.date.from).format(DateFormat.MONTH_DAY)}&nbsp;&mdash;&nbsp;${dayjs(points[points.length -1].data.date.from).format(DateFormat.MONTH_DAY)}`;
};

const createDestinationsTemplate = (points) => {
  if (points.length > DESTINATION_POINTS_LIMIT) {
    return `${points[0].destination.name}&nbsp;&mdash;&nbsp;...&nbsp;&mdash;&nbsp;${points[points.length -1].destination.name}`;
  }
  const destinations = points.map((point) => {
    return point.destination.name;
  });

  return (destinations.join('&nbsp;&mdash;&nbsp;'));
};

const createTripInfoTemplate = (points) => {
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${createDestinationsTemplate(points)}</h1>

      <p class="trip-info__dates">${createDatesTemplate(points)}</p>
    </div>
    
  </section>`;
};

export default class TripInfo {
  constructor(points) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate(this._points);
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
