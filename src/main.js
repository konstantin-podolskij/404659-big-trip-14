import {createMenuTemplate} from './view/menu.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFiltersTemplate} from './view/filters.js';
import {createSortTemplate} from './view/sort.js';
import {createEventsListTemplate} from './view/events-list.js';
import {createEventTemplate} from './view/event.js';
import {createFormAddTemplate} from './view/point-create.js';
import {createFormEditTemplate} from './view/point-edit.js';
import {renderTemplate} from './utils/utils.js';
import {POINT_COUNT, InsertPlace} from './utils/constants.js';
import {generatePoint} from './mock/point.js';

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
renderTemplate(tripMainElement, createTripInfoTemplate(points.slice(2)), InsertPlace.AFTER_BEGIN);

const menuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
renderTemplate(menuElement, createMenuTemplate(), InsertPlace.BEFORE_END);

const tripCostElement = siteHeaderElement.querySelector('.trip-info');
renderTemplate(tripCostElement, createTripCostTemplate(points.slice(2)), InsertPlace.BEFORE_END);

const filtersElement = siteHeaderElement.querySelector('.trip-controls__filters');
renderTemplate(filtersElement, createFiltersTemplate(), InsertPlace.BEFORE_END);

const mainElement = document.querySelector('.page-main');
const tripEventsElement = mainElement.querySelector('.trip-events');
renderTemplate(tripEventsElement, createSortTemplate(), InsertPlace.BEFORE_END);
renderTemplate(tripEventsElement, createEventsListTemplate(), InsertPlace.BEFORE_END);

const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
renderTemplate(eventsListElement, createFormEditTemplate(points[0]), InsertPlace.BEFORE_END);
renderTemplate(eventsListElement, createFormAddTemplate(points[1]), InsertPlace.BEFORE_END);

for (let i = 2; i < POINT_COUNT; i++) {
  renderTemplate(eventsListElement, createEventTemplate(points[i]), InsertPlace.BEFORE_END);
}
