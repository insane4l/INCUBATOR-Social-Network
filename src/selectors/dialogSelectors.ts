import { AppStateType } from "../redux/store";

export const getDialogsUsers = (state: AppStateType) => state.dialogsPage.users
export const getUserMessages = (state: AppStateType) => state.dialogsPage.userMessages
export const getNewMessageBody = (state: AppStateType) => state.dialogsPage.newMessageBody