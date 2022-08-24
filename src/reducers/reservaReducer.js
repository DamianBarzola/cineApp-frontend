import { types } from "../types/types";

const initialState = {
  msgError: "",
  data: [],
};
export const reservaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.reservaRead:
      return {
        ...state,
        data: action.payload,
      };
    case types.reservaDelete:
      return {
        ...state,
        data: state.data.filter((reserva) => {
          return reserva[0] !== action.payload;
        }),
      };

    case types.reservaClean:
      return { ...state, msgError: "", data: [] };
    default:
      return state;
  }
};
