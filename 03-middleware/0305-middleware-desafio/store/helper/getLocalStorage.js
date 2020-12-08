export const getLocalStorage = (key, initialValue) => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (err) {
    return initialValue;
  }
};
