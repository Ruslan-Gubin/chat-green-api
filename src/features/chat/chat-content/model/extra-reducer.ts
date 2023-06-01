import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { createNewMessage } from "../libs/helpers/createNewMessage";
import {
  chatNotification,
  fetchChatHistory,
  fetchDeleteNotification,
} from "./thunk";
import { IChatContentState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<IChatContentState>
) => {
  builder
    .addCase(fetchChatHistory.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchChatHistory.rejected, (state) => {
      state.loading = false;
      state.error = "Server Error";
    })
    .addCase(fetchChatHistory.fulfilled, (state, action) => {
      state.cache[action.payload.chatId] = action.payload.data;
      state.error = null;
      state.loading = false;
    });

  builder
    .addCase(chatNotification.pending, (state) => {
      console.log('true')
      state.notificationStatus = true;
      state.error = null;
    })
    .addCase(chatNotification.rejected, (state) => {
      state.error = "Server Error";
    })
    .addCase(chatNotification.fulfilled, (state, action) => {
      console.log('false')
      state.notificationStatus = false;
      state.error = null;

      if (!action.payload) return;

      state.newMessage = action.payload;
      const { body, myWid } = action.payload;

      const newMessage = createNewMessage(body, myWid);

      const checkCache = newMessage.chatId in state.cache;

      const checkCachMessage = state.cache[newMessage.chatId].some(
        (message) => message.idMessage === newMessage.idMessage
      );

      if (checkCache && !checkCachMessage) {
        state.cache[newMessage.chatId].unshift(newMessage);
      }

      if (!checkCache) {
        state.cache[newMessage.chatId] = [newMessage];
      }
    });

  builder
    .addCase(fetchDeleteNotification.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchDeleteNotification.rejected, (state) => {
      state.loading = false;
      state.error = "Server Error";
    })
    .addCase(fetchDeleteNotification.fulfilled, (state, action) => {
      if (action.payload.result) {
        state.newMessage = null;
      }

      state.error = null;
      state.loading = false;
    });
};
