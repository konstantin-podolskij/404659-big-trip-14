import {createMenuTemplate} from './view/menu.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFiltersTemplate} from './view/filters.js';
import {createSortTemplate} from './view/sort.js';
import {createEventsListTemplate} from './view/events-list.js';
import {createEventTemplate} from './view/event.js';
import {createFormAddTemplate} from './view/point-create.js';
import {createFormEditTemplate} from './view/point-edit.js';
import {render} from './utils/utils.js';
import {POINT_COUNT} from './utils/constants.js';
import {generatePoint} from './mock/point.js';

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const InsertPlace = {
  BeforeBegin: 'beforebegin',
  AfterBegin: 'afterbegin',
  BeforeEnd: 'beforeend',
  AfterEnd: 'afterend',
};

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
render(tripMainElement, createTripInfoTemplate(points.slice(2)), InsertPlace.AfterBegin);

const menuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
render(menuElement, createMenuTemplate(), InsertPlace.BeforeEnd);

const tripCostElement = siteHeaderElement.querySelector('.trip-info');
render(tripCostElement, createTripCostTemplate(points.slice(2)), InsertPlace.BeforeEnd);

const filtersElement = siteHeaderElement.querySelector('.trip-controls__filters');
render(filtersElement, createFiltersTemplate(), InsertPlace.BeforeEnd);

const mainElement = document.querySelector('.page-main');
const tripEventsElement = mainElement.querySelector('.trip-events');
render(tripEventsElement, createSortTemplate(), InsertPlace.BeforeEnd);
render(tripEventsElement, createEventsListTemplate(), InsertPlace.BeforeEnd);

const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
render(eventsListElement, createFormEditTemplate(points[0]), InsertPlace.BeforeEnd);
render(eventsListElement, createFormAddTemplate(points[1]), InsertPlace.BeforeEnd);

for (let i = 2; i < POINT_COUNT; i++) {
  render(eventsListElement, createEventTemplate(points[i]), InsertPlace.BeforeEnd);
}
