import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

type ReducersType = typeof rootReducer;
export type AppStateType = ReturnType<ReducersType>

const store = createStore(rootReducer);
export default store;


// @ts-ignore
window.store = store