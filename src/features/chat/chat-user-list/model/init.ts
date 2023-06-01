import { IContactsState } from "./types";

export const initialState: IContactsState = {
  error: null,
  loading: false,
  activeChats: [],
  searchContact: null,
  activeContact: null,
};
