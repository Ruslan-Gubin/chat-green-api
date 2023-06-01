import { PayloadAction } from "@reduxjs/toolkit";
import { IChatContentState, IChatHistory } from "./types";

export const reducers = {
  sendMessageAddCache(
    state: IChatContentState,
    action: PayloadAction<IChatHistory>
  ) {
    const newSendMessage = action.payload;

    const checkCache = newSendMessage.chatId in state.cache;

    const checkCachMessage = state.cache[newSendMessage.chatId].some(
      (message) => message.idMessage === newSendMessage.idMessage
    );

    if (checkCache && !checkCachMessage) {
      state.cache[newSendMessage.chatId].unshift(newSendMessage);
    }

    if (!checkCache) {
      state.cache[newSendMessage.chatId] = [newSendMessage];
    }
  },
};
