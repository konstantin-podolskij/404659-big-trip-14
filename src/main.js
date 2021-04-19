import MainMenuView from './view/main-menu.js';
import TripInfoView from './view/trip-info.js';
import TripCostView from './view/trip-cost';
import FiltersView from './view/filters.js';
import SortingView from './view/sort.js';
import EventsListView from './view/events-list.js';
import PointView from './view/point.js';
import NewPointView from './view/point-create.js';
import PointEditView from './view/point-edit.js';
import {render} from './utils/utils.js';
import {POINT_COUNT, InsertPlace} from './utils/constants.js';
import {generatePoint} from './mock/point.js';

const points = new Array(POINT_COUNT).fill().map(generatePoint);

points.sort((point1, point2) => {
  return point1.data.date.from - point2.data.date.from;
});

const renderPoint = (point) => {
  const pointComponent = new PointView(point);
  const editPointComponent = new PointEditView(point);

  const replacePointToEdit = () => {
    eventsListElement.replaceChild(editPointComponent.getElement(), pointComponent.getElement());
  };

  const replaceEditToPoint = (evt) => {
    evt.preventDefault();
    eventsListElement.replaceChild(pointComponent.getElement(), editPointComponent.getElement());
  };

  pointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', replacePointToEdit);
  editPointComponent.getElement().querySelector('form').addEventListener('submit', replaceEditToPoint);

  render(eventsListElement, pointComponent.getElement(), InsertPlace.BEFORE_END);
};

const siteHeaderElement = document.querySelector('.page-header');
const tripMainElement = siteHeaderElement.querySelector('.trip-main');
render(tripMainElement, new TripInfoView(points.slice(2)).getElement(), InsertPlace.AFTER_BEGIN);

const menuElement = siteHeaderElement.querySelector('.trip-controls__navigation');
render(menuElement, new MainMenuView().getElement(), InsertPlace.BEFORE_END);

const tripCostElement = siteHeaderElement.querySelector('.trip-info');
render(tripCostElement, new TripCostView(points.slice(1)).getElement(), InsertPlace.BEFORE_END);

const filtersElement = siteHeaderElement.querySelector('.trip-controls__filters');
render(filtersElement, new FiltersView().getElement(), InsertPlace.BEFORE_END);

const mainElement = document.querySelector('.page-main');
const tripEventsElement = mainElement.querySelector('.trip-events');
render(tripEventsElement, new SortingView().getElement(), InsertPlace.BEFORE_END);
render(tripEventsElement, new EventsListView().getElement(), InsertPlace.BEFORE_END);

const eventsListElement = tripEventsElement.querySelector('.trip-events__list');
render(eventsListElement, new NewPointView(points[1]).getElement(), InsertPlace.BEFORE_END);

for (let i = 1; i < POINT_COUNT; i++) {
  renderPoint(points[i]);
}
