import dayjs from 'dayjs';
import AbstractView from './abstract.js';
import {DESTINATION_POINTS_LIMIT, ROUTE_SYMBOL, DateFormat} from '../utils/constants.js';

const createDatesTemplate = (points) => {
  return `${dayjs(points[0].data.date.from).format(DateFormat.MONTH_DAY)}${ROUTE_SYMBOL}${dayjs(points[points.length -1].data.date.from).format(DateFormat.MONTH_DAY)}`;
};

const createDestinationsTemplate = (points) => {
  if (points.length > DESTINATION_POINTS_LIMIT) {
    const destinationNameFrom = points[0].destination.name;
    const destinationNameTo = points[points.length -1].destination.name;
    return `${destinationNameFrom}${ROUTE_SYMBOL}...${ROUTE_SYMBOL}${destinationNameTo}`;
  }
  const destinations = points.map((point) => {
    return point.destination.name;
  });

  return (destinations.join(ROUTE_SYMBOL));
};

const createTripInfoTemplate = (points) => {
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${createDestinationsTemplate(points)}</h1>

      <p class="trip-info__dates">${createDatesTemplate(points)}</p>
    </div>
    
  </section>`;
};

export default class TripInfo extends AbstractView {
  constructor(points) {
    super();
    this._points = points;
  }

  getTemplate() {
    return createTripInfoTemplate(this._points);
  }
}
