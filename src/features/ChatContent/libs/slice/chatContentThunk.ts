import { IRequestParam } from "@/app/types/IRequestParam";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteNotification, getChatHistory, receiveMessage } from "../../api/chatContent-api";
import { IChatHistory, IGetHistoryBody, INotificatioBody, IReceivedResponse } from "../types";

interface IDeleteNotificationParams extends IRequestParam {
  params: number
}

const fetchChatHistory = createAsyncThunk<{data: IChatHistory[], chatId: string}, IGetHistoryBody>('chatContentSlice/fetchChatHistory', async(auth) => {
  const response = await getChatHistory<IChatHistory[]>( auth.instance, auth.token, auth.body )
  
  return {data: response, chatId: auth.body.chatId}
})

const chatNotification = createAsyncThunk<IReceivedResponse | null, INotificatioBody>('chatContentSlice/chatNotification', async(auth) => {
  const response = await receiveMessage<IReceivedResponse>( auth.instance, auth.token )
 
  if (!response) {
    return null
  } else {
    return {...response, myWid: auth.wid}
  }
})

const fetchDeleteNotification = createAsyncThunk<{result: boolean}, IDeleteNotificationParams>('chatContentSlice/fetchDeleteNotification', async(auth) => {
  const response = await deleteNotification<{ result: boolean }>( auth.instance, auth.token, auth.params )
 
  return response
})



export { fetchChatHistory, chatNotification, fetchDeleteNotification }