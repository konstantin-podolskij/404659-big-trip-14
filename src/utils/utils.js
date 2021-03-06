export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElement = (arr) => {
  const index = getRandomInteger(0, arr.length - 1);

  return arr[index];
};

export const isEscape = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc'){
    return true;
  }
  return false;
};
