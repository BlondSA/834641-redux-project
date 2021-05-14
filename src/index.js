import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC": {
      return state + action.value;
    }
    case "DEC": {
      return state - action.value;
    }
    case "RES": {
      if (state === 0) {
        return state;
      }
      return (state = action.value);
    }
    default:
      return state;
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
