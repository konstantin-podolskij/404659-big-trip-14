import {createMenuTemplate} from './view/menu.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFiltersTemplate} from './view/filters.js';
import {createSortTemplate} from './view/sort.js';
import {createEventsListTemplate} from './view/events-list.js';
import {createEventTemplate} from './view/event.js';
import {createFormAddTemplate} from './view/form-add.js';
import {createFormEditTemplate} from './view/form-edit.js';

const EVENT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
render(tripMainElement, createTripInfoTemplate(), 'afterbegin');

const menuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
render(menuElement, createMenuTemplate(), 'beforeend');

const tripCostElement = siteHeaderElement.querySelector('.trip-info');
render(tripCostElement, createTripCostTemplate(), 'beforeend');

const filtersElement = siteHeaderElement.querySelector('.trip-controls__filters');
render(filtersElement, createFiltersTemplate(), 'beforeend');

const mainElement = document.querySelector('.page-main');
const tripEventsElement = mainElement.querySelector('.trip-events');
render(tripEventsElement, createSortTemplate(), 'beforeend');
render(tripEventsElement, createEventsListTemplate(), 'beforeend');

const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
render(eventsListElement, createFormEditTemplate(), 'beforeend');
render(eventsListElement, createFormAddTemplate(), 'beforeend');

for (let i = 0; i < EVENT_COUNT; i++) {
  render(eventsListElement, createEventTemplate(), 'beforeend');
}
