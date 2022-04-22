import { UserType } from "../redux/usersReducer";
import { apiBase } from "./API";

export const usersAPI = {
    getUsers(pageNumber: number, pageSize: number) {
        return apiBase.get<GetUsersResponseType>(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data);
    },
    unfollow(userId: number) {
        return apiBase.delete(`follow/${userId}`).then(res => res.data);
    },
    follow(userId: number) {
        return apiBase.post(`follow/${userId}`).then(res => res.data);
    },
}


type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}