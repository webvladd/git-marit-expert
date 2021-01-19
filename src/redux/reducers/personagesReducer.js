import { SET_PERSONAGES } from "../actions/personagesActions";

const defaultState = {
  items: [],
};


export default function personagesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_PERSONAGES:
      return {
        ...state,
        items: action.payload
      }

    default:
      return state;
  }
}