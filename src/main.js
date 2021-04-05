import {createMenuTemplate} from './view/menu.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFiltersTemplate} from './view/filters.js';
import {createSortTemplate} from './view/sort.js';
import {createEventsListTemplate} from './view/events-list.js';
import {createEventTemplate} from './view/event.js';
import {createFormAddTemplate} from './view/form-add.js';
import {createFormEditTemplate} from './view/form-edit.js';
import {render} from './utils/utils.js';
import {EVENT_COUNT} from './utils/constants.js';

const elem_position = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
render(tripMainElement, createTripInfoTemplate(), elem_position.AFTER_BEGIN);

const menuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
render(menuElement, createMenuTemplate(), elem_position.BEFORE_END);

const tripCostElement = siteHeaderElement.querySelector('.trip-info');
render(tripCostElement, createTripCostTemplate(), elem_position.BEFORE_END);

const filtersElement = siteHeaderElement.querySelector('.trip-controls__filters');
render(filtersElement, createFiltersTemplate(), elem_position.BEFORE_END);

const mainElement = document.querySelector('.page-main');
const tripEventsElement = mainElement.querySelector('.trip-events');
render(tripEventsElement, createSortTemplate(), elem_position.BEFORE_END);
render(tripEventsElement, createEventsListTemplate(), elem_position.BEFORE_END);

const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
render(eventsListElement, createFormEditTemplate(), elem_position.BEFORE_END);
render(eventsListElement, createFormAddTemplate(), elem_position.BEFORE_END);

for (let i = 0; i < EVENT_COUNT; i++) {
  render(eventsListElement, createEventTemplate(), elem_position.BEFORE_END);
}
