import { createStore } from "redux";

let initialState = {
  name: "tyler",
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer)

export default store