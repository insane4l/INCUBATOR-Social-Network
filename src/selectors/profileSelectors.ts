import { AppStateType } from "../redux/store";

export const getSelectedProfile = (state: AppStateType) => state.profilePage.selectedProfile
export const getSelectedProfileStatus = (state: AppStateType) => state.profilePage.profileStatus
export const getProfileError = (state: AppStateType) => state.profilePage.profileError
export const getProfilePosts = (state: AppStateType) => state.profilePage.posts