import {getRandomInteger} from '../utils/utils.js';

export const createOptionOffersTemplate = (options) => {
  if (!options.length) {
    return '';
  }

  const optionsMarkup = options.map((option, index) => {
    const isChecked  = getRandomInteger(0, 1) ? 'checked' : '';
    const id = `event-offer-${option.title.toLowerCase().split(' ').join('-')}-${index + 1}`;

    return `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${id}" type="checkbox" name="${id}" ${isChecked}>
      <label class="event__offer-label" for="${id}">
        <span class="event__offer-title">${option.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${option.price}</span>
      </label>
    </div>`;
  }).join();

  return `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
    ${optionsMarkup}
    </div>
  </section>`;
};
