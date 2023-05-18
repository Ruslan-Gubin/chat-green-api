import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAllchats,  getContact } from "../../api/chat-contacts-api"
import { IActiveChats } from "../types/IActiveChats";
import { IOneContactInfo } from "../types/IContactInfo";

interface IGetAllChatsBody {
  instance: number;
  token: string;
}

interface IGetContactInfo extends IGetAllChatsBody {
  body: {chatId: string}
}


const fetchAllChats = createAsyncThunk<IActiveChats[], IGetAllChatsBody>('contactsSlice/fetchAllChats', async(auth) => {
  const response = await getAllchats<IActiveChats[]>( auth.instance, auth.token )


  const addContactInfoArr: IActiveChats[] = []

  for (const contact of response) {
    const checkNull = contact.id.match(/null/) 
    
    if (!checkNull)  {
      const getContactInfo = await getContact<IOneContactInfo>( auth.instance, auth.token, { chatId: contact.id } )
      
    addContactInfoArr.push({
      ...contact,
      ...getContactInfo,
    })
  }
  }

  return addContactInfoArr
})



const fetchGetContact = createAsyncThunk<IActiveChats, IGetContactInfo>('contactsSlice/fetchGetContact', async(auth) => {
  const response = await getContact<IActiveChats>( auth.instance, auth.token, auth.body )
  
  return response
})

export { fetchAllChats,  fetchGetContact }