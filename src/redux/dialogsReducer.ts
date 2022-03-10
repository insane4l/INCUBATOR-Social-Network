let initialState = {
	users: [
		{name: 'Dmitry', id: 1},
		{name: 'Roman', id: 2},
		{name: 'Victor', id: 3},
		{name: 'Alex', id: 4},
	],

	userMessages: [
		{message: 'Hello!', id: 1},
		{message: 'How are you?', id: 2},
		{message: 'Lets do that project what we talk about', id: 3},
		{message: 'It might help other people', id: 4},
		{message: 'Yeah great idea', id: 5}
	],

    newMessageBody: ''
};
type InitialStateType = typeof initialState;
export type DialogsUserType = typeof initialState.users[0]; // temporary
export type DialogMessageType = typeof initialState.userMessages[0]; // temporary



const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
        case 'sn/dialogs/SET_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.message
            }
		case 'sn/dialogs/SEND_MESSAGE':
			return {
                ...state,
                userMessages: [...state.userMessages, {message: state.newMessageBody, id: 66}],
				newMessageBody: ''
            }
		default:
			return state;
	}
};
type ActionsType = ReturnType<typeof sendMessageAC> | ReturnType<typeof setNewMessageBodyAC>;

export const sendMessageAC = () => ({type: 'sn/dialogs/SEND_MESSAGE' as const});

export const setNewMessageBodyAC = (message: string) => ({type: 'sn/dialogs/SET_NEW_MESSAGE_BODY' as const, message});

export default dialogsReducer;
