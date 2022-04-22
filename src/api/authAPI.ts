import { apiBase, ResponseType } from "./API";

export const authAPI = {
    getUserAuthData() {
        return apiBase.get<ResponseType<AuthMeResponseDataType>>(`auth/me`).then(res => res.data);
    },
}


type AuthMeResponseDataType = {
    id: number
    email: string
    login: string
}