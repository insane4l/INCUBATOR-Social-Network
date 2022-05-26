import { AppStateType } from "../redux/store";

export const getAuthUserId = (state: AppStateType) => state.auth.id
export const getIsUserAuthorized = (state: AppStateType) => state.auth.isUserAuthorized
export const getAuthUserLogin = (state: AppStateType) => state.auth.login
export const getCaptchaUrl = (state: AppStateType) => state.auth.captchaUrl