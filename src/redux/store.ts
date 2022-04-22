import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

type ReducersType = typeof rootReducer;
export type AppStateType = ReturnType<ReducersType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;


// @ts-ignore
window.store = store