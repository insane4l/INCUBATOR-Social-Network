import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "../api/API";
import { getUserAuthData } from "./authReducer";

let initialState = {
    isInitialized: false
};
type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
        case 'sn/app/APP_INITIALIZED':
            return {
                ...state,
                isInitialized: true
            }
		default:
			return state;
	}
};
type ActionsType = ReturnType<typeof appInitialized>;

export const appInitialized = () => ({type: 'sn/app/APP_INITIALIZED'} as const);


export const ititializeApp = () => async (dispatch: any) => {

    dispatch(getUserAuthData())
        .then(() => {
            dispatch(appInitialized());
        })
}


export default appReducer;
