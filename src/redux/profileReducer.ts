

let initialState = {
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
type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof setNewPostMessageAC>;

export const addPostAC = () => ({type: 'sn/profile/ADD_POST' as const});

export const setNewPostMessageAC = (message: string) => ({type: 'sn/profile/SET_NEW_POST_MESSAGE' as const, message});

export default profileReducer;
