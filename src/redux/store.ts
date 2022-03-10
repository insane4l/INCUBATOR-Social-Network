import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>

const store = createStore(reducers);
export default store;