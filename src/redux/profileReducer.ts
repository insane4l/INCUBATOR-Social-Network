import { profileAPI } from "../api/profileAPI"

export type ProfileContactsType = {
    github: string | undefined
    vk: string | undefined
    facebook: string | undefined
    instagram: string | undefined
    twitter: string | undefined
    website: string | undefined
    youtube: string | undefined
    mainLink: string | undefined
}

export type UserPhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: UserPhotosType
    aboutMe: string
}


let initialState = {
    selectedProfile: null as ProfileType | null,
	posts: [
        { text: "First post. Hello friends!", likesCount: 10, id: 1 },
	    { text: "My second post.", likesCount: 0, id: 2 },
	    { text: "Add me to friends", likesCount: 6, id: 3 }
    ],
    profileError: '',
    profileStatus: '',
};
type InitialStateType = typeof initialState;
export type ProfilePostsType = typeof initialState.posts;

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
        case 'sn/profile/SET_USER_PROFILE':
            return {
                ...state,
                selectedProfile: action.payload.profile
            }
		case 'sn/profile/ADD_POST':
			return {
                ...state,
                posts: [...state.posts, {text: action.message, likesCount: 0, id: 55}]
            }
		case 'sn/profile/SET_PROFILE_ERROR':
			return {
                ...state,
                profileError: action.error
            }
		case 'sn/profile/SET_PROFILE_STATUS':
			return {
                ...state,
                profileStatus: action.statusMessage
            }
		default:
			return state;
	}
};
type ActionsType = ReturnType<typeof addPostAC>
| ReturnType<typeof setUserProfile> | ReturnType<typeof setProfileError>
| ReturnType<typeof setProfileStatus>;

export const setUserProfile = (profile: ProfileType | null) => ({type: 'sn/profile/SET_USER_PROFILE', payload: {profile}} as const);

export const addPostAC = (message: string) => ({type: 'sn/profile/ADD_POST', message} as const);

export const setProfileError = (error: string) => ({type: 'sn/profile/SET_PROFILE_ERROR', error} as const);

export const setProfileStatus = (statusMessage: string) => ({type: 'sn/profile/SET_PROFILE_STATUS', statusMessage} as const);





export const getProfile = (userId: number) => (dispatch: any) => {
    setProfileError('');

    profileAPI.getProfile(userId)
        .then(data => dispatch(setUserProfile(data)) )
        .catch(error => {

            if (error.response && error.response.status === 400) {
                dispatch( setProfileError(`User not found (wrong id)`) )
            } else {
                dispatch( setProfileError(`${error}`) )
            }
        });
}


export const getProfileStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getProfileStatus(userId)
        .then(status => dispatch(setProfileStatus(status)) )
}
export const updateProfileStatus = (message: string) => (dispatch: any) => {
    profileAPI.setProfileStatus(message)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setProfileStatus(message));
            }
        })
}

export default profileReducer;
