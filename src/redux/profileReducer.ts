
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
    newPostText: ''
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
        case 'sn/profile/SET_NEW_POST_MESSAGE':
            return {
                ...state,
                newPostText: action.message
            }
		case 'sn/profile/ADD_POST':
			return {
                ...state,
                posts: [...state.posts, {text: state.newPostText, likesCount: 0, id: 55}],
                newPostText: ''
            }
		default:
			return state;
	}
};
type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof setNewPostMessageAC>
| ReturnType<typeof setUserProfile>;

export const setUserProfile = (profile: any) => ({type: 'sn/profile/SET_USER_PROFILE', payload: {profile}} as const);

export const addPostAC = () => ({type: 'sn/profile/ADD_POST'} as const);

export const setNewPostMessageAC = (message: string) => ({type: 'sn/profile/SET_NEW_POST_MESSAGE', message} as const);


export default profileReducer;
