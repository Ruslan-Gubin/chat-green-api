import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchAllChats, fetchGetContact } from "./thunk";
import { IContactsState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<IContactsState>
) => {
  builder
    .addCase(fetchAllChats.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAllChats.rejected, (state) => {
      state.loading = false;
      state.error = "Server Error";
    })
    .addCase(fetchAllChats.fulfilled, (state, action) => {
      state.activeChats = action.payload;
      state.error = null;
      state.loading = false;
    });

  builder
    .addCase(fetchGetContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchGetContact.rejected, (state) => {
      state.loading = false;
      state.error = "Server Error";
    })
    .addCase(fetchGetContact.fulfilled, (state, action) => {
      state.searchContact = action.payload;
      state.error = null;
      state.loading = false;
    });
};
