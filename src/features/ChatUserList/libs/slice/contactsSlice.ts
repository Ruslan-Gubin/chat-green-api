import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "../../../../app/store/store";
import { IActiveChats } from "../types/IActiveChats";
import { IContactsState } from "../types/IContactsState";
import { fetchAllChats, fetchGetContact } from "./contactsThunk";


const initialState: IContactsState = {
  error: null,
  loading: false,
  activeChats: [],
  searchContact: null,
  activeContact: null,
};

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,

  reducers: {
    activeContact: (state, action: PayloadAction<IActiveChats>) => {
      state.activeContact = action.payload
    },

    cancelSearchContact(state) {
      state.searchContact = null
    },

  },

  extraReducers(builder) {
    builder
    .addCase(fetchAllChats.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchAllChats.rejected, (state) => {
      state.loading = false
      state.error = 'Server Error'
    })
    .addCase(fetchAllChats.fulfilled, (state, action) => {
      state.activeChats = action.payload
      state.error = null
      state.loading = false
    })
   

    .addCase(fetchGetContact.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchGetContact.rejected, (state) => {
      state.loading = false
      state.error = 'Server Error'
    })
    .addCase(fetchGetContact.fulfilled, (state, action) => {
      state.searchContact = action.payload
      state.error = null
      state.loading = false
    }) 


  },


});

export const selectContacts = (state: TypeRootState) => state.contactsSlice;

export const contactsAction = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
