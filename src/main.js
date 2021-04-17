import MainMenuView from './view/main-menu.js';
import TripInfoView from './view/trip-info.js';
import TripCostView from './view/trip-cost';
import FiltersView from './view/filters.js';
import SortingView from './view/sort.js';
import EventsListView from './view/events-list.js';
import PointView from './view/point.js';
import NewPointView from './view/point-create.js';
import PointEditView from './view/point-edit.js';
import {renderElement} from './utils/utils.js';
import {POINT_COUNT, InsertPlace} from './utils/constants.js';
import {generatePoint} from './mock/point.js';

const points = new Array(POINT_COUNT).fill().map(generatePoint);

points.sort((point1, point2) => {
  if (point1.data.date.from < point2.data.date.from) {
    return -1;
  }
  return 1;
});

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
renderElement(tripMainElement, new TripInfoView(points.slice(2)).getElement(), InsertPlace.AFTER_BEGIN);

const menuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
renderElement(menuElement, new MainMenuView().getElement(), InsertPlace.BEFORE_END);

const tripCostElement = siteHeaderElement.querySelector('.trip-info');
renderElement(tripCostElement, new TripCostView(points.slice(2)).getElement(), InsertPlace.BEFORE_END);

const filtersElement = siteHeaderElement.querySelector('.trip-controls__filters');
renderElement(filtersElement, new FiltersView().getElement(), InsertPlace.BEFORE_END);

const mainElement = document.querySelector('.page-main');
const tripEventsElement = mainElement.querySelector('.trip-events');
renderElement(tripEventsElement, new SortingView().getElement(), InsertPlace.BEFORE_END);
renderElement(tripEventsElement, new EventsListView().getElement(), InsertPlace.BEFORE_END);

const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
renderElement(eventsListElement, new PointEditView(points[0]).getElement(), InsertPlace.BEFORE_END);
renderElement(eventsListElement, new NewPointView(points[1]).getElement(), InsertPlace.BEFORE_END);

for (let i = 2; i < POINT_COUNT; i++) {
  renderElement(eventsListElement, new PointView(points[i]).getElement(), InsertPlace.BEFORE_END);
}
