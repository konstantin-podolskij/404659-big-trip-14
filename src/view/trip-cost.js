import AbstractView from './abstract.js';

const calcTripCost = (points) => {
  let tripCost = 0;
  points.forEach((point) => {
    const {
      offer: {
        options,
      },
      data: {
        price,
      },
    } = point;

    const offersPrice = options.reduce((sumPrice, currentOption) => {
      return sumPrice + currentOption.price;
    }, 0);
    tripCost += price + offersPrice;
  });

  return tripCost;
};

const createTripCostTemplate = (points) => {
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${calcTripCost(points)}</span>
  </p>`;
};

export default class TripCost extends AbstractView {
  constructor(points) {
    super();
    this._points = points;
  }

  getTemplate() {
    return createTripCostTemplate(this._points);
  }
}
