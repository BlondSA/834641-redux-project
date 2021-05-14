import { createStore } from "redux";

const reducer = (store = 0, action) => {
  switch (action.type) {
    case "INC":
      return store + action.value;
    case "DEC":
      return store - action.value;
    case "RES":
      if (store === 0) {
        return store;
      }
      return (store = action.value);
    default:
      return store;
  }
};

const store = createStore(reducer);

const inc = (value) => ({ type: "INC", value });
const dec = (value) => ({ type: "DEC", value });
const res = (value) => ({ type: "RES", value });

document.querySelector("#inc").addEventListener("click", () => {
  const value = 1;
  store.dispatch(inc(value));
});

document.querySelector("#dec").addEventListener("click", () => {
  const value = 1;
  store.dispatch(dec(value));
});

document.querySelector("#res").addEventListener("click", () => {
  const value = 0;
  store.dispatch(res(value));
});

const update = () => {
  document.querySelector("#counter").textContent = store.getState();
};

store.subscribe(update);
