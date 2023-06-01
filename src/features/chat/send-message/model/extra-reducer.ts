import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {  fetchSendMessage } from "./thunk";
import { IsendMessageState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<IsendMessageState>
) => {
  builder
  .addCase(fetchSendMessage.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(fetchSendMessage.rejected, (state) => {
    state.loading = false;
    state.error = "Server Error";
  })
  .addCase(fetchSendMessage.fulfilled, (state, action) => {
    state.sendMessatesId.push(action.payload.idMessage);
    state.error = null;
    state.loading = false;
  });
};
