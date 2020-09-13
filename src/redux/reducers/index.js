import { combineReducers } from "redux";
import filters from "./filters.js";
import pizzas from "./pizzas.js";

const rootReducer = combineReducers({
  filters,
  pizzas,
});

export default rootReducer;
