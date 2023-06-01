import { IChatContentState } from "./types";

export const initialState: IChatContentState = {
  notificationStatus: false,
  error: null,
  loading: false,
  cache: {},
  newMessage: null,
};
