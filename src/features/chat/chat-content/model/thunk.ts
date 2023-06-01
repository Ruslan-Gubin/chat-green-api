import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteNotification,
  getChatHistory,
  receiveMessage,
} from "../api/chatContent-api";
import {
  IChatHistory,
  IDeleteNotificationParams,
  IGetHistoryBody,
  INotificatioBody,
  IReceivedResponse,
} from "./types";

export const fetchChatHistory = createAsyncThunk<
  { data: IChatHistory[]; chatId: string },
  IGetHistoryBody
>("chatContentSlice/fetchChatHistory", async (auth) => {
  const response = await getChatHistory<IChatHistory[]>(
    auth.instance,
    auth.token,
    auth.body
  );

  return { data: response, chatId: auth.body.chatId };
});

export const chatNotification = createAsyncThunk<
  IReceivedResponse | null,
  INotificatioBody
>("chatContentSlice/chatNotification", async (auth) => {
  const response = await receiveMessage<IReceivedResponse>(
    auth.instance,
    auth.token
  );
console.log(response)
  if (!response) {
    return null;
  } else {
    return { ...response, myWid: auth.wid };
  }
});

export const fetchDeleteNotification = createAsyncThunk<
  { result: boolean },
  IDeleteNotificationParams
>("chatContentSlice/fetchDeleteNotification", async (auth) => {
  const response = await deleteNotification<{ result: boolean }>(
    auth.instance,
    auth.token,
    auth.params
  );

  return response;
});
