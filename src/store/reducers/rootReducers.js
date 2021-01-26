import { combineReducers } from "redux";
import filterReducer from './filterReducer';
import pizzasReducer from './pizzasReducer';


const rootReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer
})

export default rootReducer