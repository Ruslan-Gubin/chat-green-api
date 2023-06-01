import { useAppDispatch, useAppSelector } from "@/shared";
import { sendMessageSlice } from "./slice";
import { fetchSendMessage } from "./thunk";
import { ISendMessage } from "./types";


const select = (state: RootState) => state.sendMessageSlice;
const action = sendMessageSlice.actions;
export const sendMessageReducer = sendMessageSlice.reducer;


export const useSendMessageSelect = () => {
  return useAppSelector(select);
};

export const useSendMessageAction = () => {
  const dispatch = useAppDispatch();

  return {
    fetchSendMessage: (auth: ISendMessage) => dispatch(fetchSendMessage(auth)),
  };
};
