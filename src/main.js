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

const elem_position = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
render(tripMainElement, createTripInfoTemplate(points.slice(2)), elem_position.AFTER_BEGIN);

const menuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
render(menuElement, createMenuTemplate(), elem_position.BEFORE_END);

const tripCostElement = siteHeaderElement.querySelector('.trip-info');
render(tripCostElement, createTripCostTemplate(points.slice(2)), elem_position.BEFORE_END);

const filtersElement = siteHeaderElement.querySelector('.trip-controls__filters');
render(filtersElement, createFiltersTemplate(), elem_position.BEFORE_END);

const mainElement = document.querySelector('.page-main');
const tripEventsElement = mainElement.querySelector('.trip-events');
render(tripEventsElement, createSortTemplate(), elem_position.BEFORE_END);
render(tripEventsElement, createEventsListTemplate(), elem_position.BEFORE_END);

const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
render(eventsListElement, createFormEditTemplate(points[0]), elem_position.BEFORE_END);
render(eventsListElement, createFormAddTemplate(points[1]), elem_position.BEFORE_END);

for (let i = 2; i < POINT_COUNT; i++) {
  render(eventsListElement, createEventTemplate(points[i]), elem_position.BEFORE_END);
}
