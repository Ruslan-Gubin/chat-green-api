import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "../../../../app/store/store";
import { createNewMessage } from "../helpers/createNewMessage";
import { IChatContentState, IChatHistory } from "../types";
import {
  chatNotification,
  fetchChatHistory,
  fetchDeleteNotification,
} from "./chatContentThunk";

const initialState: IChatContentState = {
  notificationStatus: false,
  error: null,
  loading: false,
  cache: {},
  newMessage: null,
};

export const chatContentSlice = createSlice({
  name: "chatContentSlice",
  initialState,

  reducers: {
    sendMessageAddCache(state, action: PayloadAction<IChatHistory>) {
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
  },

  extraReducers(builder) {
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
      })

      .addCase(chatNotification.pending, (state) => {
        state.notificationStatus = true;
        state.error = null;
      })
      .addCase(chatNotification.rejected, (state) => {
        state.error = "Server Error";
      })
      .addCase(chatNotification.fulfilled, (state, action) => {
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
      })

      .addCase(fetchDeleteNotification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeleteNotification.rejected, (state) => {
        state.loading = false;
        state.error = "Server Error";
      })
      .addCase(fetchDeleteNotification.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.result) {
          state.newMessage = null;
        }

        state.error = null;
        state.loading = false;
      });
  },
});

export const selectChatContent = (state: TypeRootState) =>
  state.chatContentSlice;

export const chatContentAction = chatContentSlice.actions;

export const chatContentReducer = chatContentSlice.reducer;
