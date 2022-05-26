import { AppStateType } from "../redux/store";

export const getIsAppInitialized = (state: AppStateType) => state.app.isInitialized