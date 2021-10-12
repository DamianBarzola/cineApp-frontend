import { types } from "../types/types";

const initialState = {
  data: [],
};
export const salaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.salaAdd:
      return {};
    case types.salaRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.salaModify:
      return {};
    case types.salaDelete:
      return {};
    case types.salaClean:
      return { ...state, data: [] };
    default:
      return state;
  }
};
