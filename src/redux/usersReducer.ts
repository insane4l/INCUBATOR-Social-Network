export type UserType = {
    name: string
    id: number
    photos: { small: string | null, large: string | null }
    status: string | null
    followed: boolean
}

let initialState = {
	users: [
        { name: 'Roman', id: 1, photos: {small: '', large: ''}, status: 'Whats up man', followed: true},
        { name: 'Diman', id: 2, photos: {small: '', large: ''}, status: 'Hello my friends', followed: true},
        { name: 'Ivan', id: 3, photos: {small: '', large: ''}, status: 'WTF', followed: false},
    ] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
};
type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
        case 'sn/users/SET_USERS_LIST':
            return {
                ...state,
                users: [...action.payload.users]
            }
        case 'sn/users/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload.page
            }
        case 'sn/users/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.payload.num
            }
		case 'sn/users/TOGGLE_USER_FOLLOWED_STATUS':
			return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: !u.followed} : u)
            }
		case 'sn/users/SET_LOADING_STATUS':
			return {
                ...state,
                isLoading: action.payload.isLoading
            }
		default:
			return state;
	}
};
type ActionsType = ReturnType<typeof setUsers> | ReturnType<typeof toggleFollowedStatus>
| ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
| ReturnType<typeof setLoadingStatus>;

export const setUsers = (users: Array<UserType>) => ({type: 'sn/users/SET_USERS_LIST' as const, payload: {users}});

export const setCurrentPage = (page: number) => ({type: 'sn/users/SET_CURRENT_PAGE' as const, payload: {page}});

export const setTotalUsersCount = (num: number) => ({type: 'sn/users/SET_TOTAL_USERS_COUNT' as const, payload: {num}});

export const toggleFollowedStatus = (userId: number) => ({type: 'sn/users/TOGGLE_USER_FOLLOWED_STATUS' as const, payload: {userId}});

export const setLoadingStatus = (isLoading: boolean) => ({type: 'sn/users/SET_LOADING_STATUS' as const, payload: {isLoading}});

export default usersReducer;
