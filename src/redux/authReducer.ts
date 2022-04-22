import { authAPI } from "../api/authAPI";

let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isUserAuthorized: false
};
type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
        case 'sn/auth/SET_USER_AUTH_DATA':
            return {
                ...state,
                ...action.payload,
            }
		default:
			return state;
	}
};
type ActionsType = ReturnType<typeof setUserAuthData>;

export const setUserAuthData = (id: number, email: string, login: string, isUserAuthorized: boolean) => ({type: 'sn/auth/SET_USER_AUTH_DATA', payload: {id, email, login, isUserAuthorized}} as const);

export const getUserAuthData = () => (dispatch: any) => {
    authAPI.getUserAuthData()
        .then(data => {
        
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch( setUserAuthData(id, email, login, true) );
            }
        })
}


export default authReducer;
