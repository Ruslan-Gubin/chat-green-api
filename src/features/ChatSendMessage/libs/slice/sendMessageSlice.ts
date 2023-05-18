import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeRootState } from "../../../../app/store/store";
import { fetchSendMessage } from "./sendMessageThunk";

interface IsendMessageState {
  error: string | null;
  loading: boolean;
  sendMessatesId: string[];
}

const initialState: IsendMessageState = {
  error: null,
  loading: false,
  sendMessatesId: [],
};

export const sendMessageSlice = createSlice({
  name: "sendMessageSlice",
  initialState,

  reducers: {},

  extraReducers(builder) {
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
  },
});

export const selectSendMessage = (state: TypeRootState) =>
  state.sendMessageSlice;

export const sendMessageAction = sendMessageSlice.actions;

export const sendMessageReducer = sendMessageSlice.reducer;
