import { types } from "../types/types";

const initialState = {};
export const ticketSaleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ticketSaleSuccess:
      return {
        ...state,
        situation: 1,
        data: action.payload,
      };
    case types.ticketSaleErrorConnection:
      return {
        ...state,
        situation: 3,
        message: action.payload,
      };
    case types.ticketSaleRefused:
      return {
        ...state,
        situation: 2,
        message: action.payload,
      };
    case types.ticketSaleCancel:
      return {
        ...state,
        messageCancel: action.payload,
      };
    case types.ticketSaleClean:
      return {};
    default:
      return state;
  }
};
