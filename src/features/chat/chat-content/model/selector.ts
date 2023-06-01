import { useAppDispatch, useAppSelector } from "@/shared";
import { chatContentSlice } from "./slice";
import { chatNotification, fetchChatHistory, fetchDeleteNotification } from "./thunk";
import { IChatHistory, IDeleteNotificationParams, IGetHistoryBody, INotificatioBody } from "./types";


const select = (state: RootState) => state.chatContentSlice;
export const chatContentAction = chatContentSlice.actions;
export const chatContentReducer = chatContentSlice.reducer;


export const useChatContentSelect = () => {
  return useAppSelector(select);
};

export const useChatContentAction = () => {
  const dispatch = useAppDispatch();

  return {
    getChatHistory: (auth: IGetHistoryBody) => dispatch(fetchChatHistory(auth)),
    chatNotification: (auth: INotificatioBody) => dispatch(chatNotification(auth)),
    deleteNotification: (auth: IDeleteNotificationParams) => dispatch(fetchDeleteNotification(auth)),
  };
};
