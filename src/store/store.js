import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";
import { filmReducer } from "../reducers/filmReducer";
import { showReducer } from "../reducers/showReducer";
import { salaReducer } from "../reducers/salaReducer";

const reducers = combineReducers({
  auth: authReducer,
  film: filmReducer,
  show: showReducer,
  sala: salaReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
