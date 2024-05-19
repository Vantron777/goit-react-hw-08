export const debounce = (func, delay) => {
  let timer;
  return function (text) {
    clearTimeout(timer);
    timer = setTimeout(() => func(text), delay);
  };
};
