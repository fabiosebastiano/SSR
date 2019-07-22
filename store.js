import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import data from "./data/data.json";

//1) initial state
const startState = {
  cards: []
};

//3) actions
export const initialCards = () => {
  return {
    type: "INITIALCARDS",
    cards: data
  };
};
export const addItem = item => {
  return {
    type: "ADD",
    item
  };
};

//4) reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALCARDS":
      return {
        cards: action.cards
      };
    case "ADD":
      return {
        ...state,
        cards: [...state.cards, actions.item]
      };
    default:
      return state;
  }
};

//2) create store
export const initStore = (initialState = startState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(thunkMiddleware)
  );
};
