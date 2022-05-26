import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "../api/API";
import { authAPI } from "../api/authAPI";

let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isUserAuthorized: false,
    captchaUrl: null as null | string
};
type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
        case 'sn/auth/SET_USER_AUTH_DATA':
        case 'sn/auth/SET_CAPTCHA_IMG':
            return {
                ...state,
                ...action.payload,
            }
		default:
			return state;
	}
};
type ActionsType = ReturnType<typeof setUserAuthData> | ReturnType<typeof setCaptchaImg>;

export const setUserAuthData = (id: number | null, email: string | null, login: string | null, isUserAuthorized: boolean) => ({type: 'sn/auth/SET_USER_AUTH_DATA', payload: {id, email, login, isUserAuthorized}} as const);
export const setCaptchaImg = (captchaUrl: string) => ({type: 'sn/auth/SET_CAPTCHA_IMG', payload: {captchaUrl}} as const);

export const getUserAuthData = () => (dispatch: any) => {
    return authAPI.getUserAuthData()
        .then(data => {
        
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch( setUserAuthData(id, email, login, true) );
            }
        })
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string) => async (dispatch: any) => {

    let data = await authAPI.login(email, password, rememberMe, captcha);
    
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserAuthData())
    } else if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl())
    }
}


export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await authAPI.getCaptchaImg()
    dispatch(setCaptchaImg(data.url))
}

export const logout = () => async (dispatch: any) => {

    let data = await authAPI.logout();
    
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserAuthData(null, null, null, false))
    }
}


export default authReducer;
