import { PayloadAction } from "@reduxjs/toolkit";
import { IActiveChats, IContactsState } from "./types";


export const reducers = {
  activeContact: (state: IContactsState, action: PayloadAction<IActiveChats>) => {
    state.activeContact = action.payload
  },

  cancelSearchContact(state: IContactsState) {
    state.searchContact = null
  },
};
