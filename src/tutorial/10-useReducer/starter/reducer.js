import { data } from "../../../data";
import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  } else {
    throw new Error(`No matching "${action.type}" - action type.`);
  }
};
