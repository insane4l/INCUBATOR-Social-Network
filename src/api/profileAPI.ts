import { ProfileType } from "../redux/profileReducer";
import { apiBase, ResponseType } from "./API";

export const profileAPI = {
    getProfile(userId: number) {
        return apiBase.get<ProfileType>(`profile/${userId}`).then(res => res.data);
    },
    getProfileStatus(userId: number) {
        return apiBase.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    setProfileStatus(message: string) {
        return apiBase.put<ResponseType>('profile/status', {status: message}).then(res => res.data)
    },
}