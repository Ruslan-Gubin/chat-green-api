import { useAppDispatch, useAppSelector } from "@/shared";
import { contactsSlice } from "./slice";
import { fetchAllChats, fetchGetContact } from "./thunk";
import { IActiveChats, IGetAllChatsBody, IGetContactInfo } from "./types";


const select = (state: RootState) => state.contactsSlice;
const action = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;


export const useContactSelect = () => {
  return useAppSelector(select);
};

export const useContactAction = () => {
  const dispatch = useAppDispatch();

  return {
    setActiveContact: (contact: IActiveChats) => dispatch(action.activeContact(contact)),
    cancelSearchContact: () => dispatch(action.cancelSearchContact()),
    fetchAllChats: (auth: IGetAllChatsBody) => dispatch(fetchAllChats(auth)),
    fetchGetContact: (auth: IGetContactInfo) => dispatch(fetchGetContact(auth)),
  };
};
