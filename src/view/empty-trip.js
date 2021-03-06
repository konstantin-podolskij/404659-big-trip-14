import AbstractView from './abstract.js';

function createEmptyTripTemplate() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}

export default class EmptyTrip extends AbstractView {
  getTemplate() {
    return createEmptyTripTemplate();
  }
}
