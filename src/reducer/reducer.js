import { ACTIONS } from "../actions/actions";
const initialStateFileByName = {
  file: false,
  lines: false,
  state: "empty",
};
// manejo de estados de redux
export const reducerReemplace = (state = initialStateFileByName, action) => {
  if (action.type === ACTIONS.REEMPLACE) {
    return action.payload.data;
  }
  return state;
};
export const reducerListFiles = (state = false, action) => {
  if (action.type === ACTIONS.CALL_FILE_LIST) {
    return action.payload.data;
  } else {
    return state;
  }
};
