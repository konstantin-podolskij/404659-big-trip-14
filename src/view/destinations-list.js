export const createDestinationDatalistTemplate = (destinations) => {
  let optionsMarkup = '';
  destinations.forEach((destination) => {
    optionsMarkup += `<option value="${destination}"></option>`;
  });

  return optionsMarkup;
};
