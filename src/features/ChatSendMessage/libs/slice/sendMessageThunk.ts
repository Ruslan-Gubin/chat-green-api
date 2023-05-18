import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatContentAction } from "@/features/ChatContent";
import { sendMessage } from "../../api/chatSendMessage-api";
import { ISendMessage, ISendMessageBody } from "../types/ISendMessage";



const fetchSendMessage = createAsyncThunk<{idMessage: string}, ISendMessage >('sendMessageSlice/fetchSendMessage', async(auth,thunkAPI ) => {
  const response = await sendMessage<{idMessage: string}, ISendMessageBody>( auth.instance, auth.token, auth.body ) 
  
  thunkAPI.dispatch(chatContentAction.sendMessageAddCache({
    idMessage: response.idMessage,
    chatId: auth.body.chatId,
    sendByApi: false,
    statusMessage: 'send',
    textMessage: auth.body.message,
    timestamp: Date.now() / 1000,
    type: "outgoing",
    typeMessage: 'textMessage',
  }))

  return response
})




export { fetchSendMessage }