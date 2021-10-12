import { types } from "../types/types";

const initialState = {
  data: [],
};
export const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showAdd:
      return {};
    case types.showRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.showModify:
      return {};
    case types.showDelete:
      return {};
    case types.showClean:
      return { ...state, data: [] };
    default:
      return state;
  }
};
