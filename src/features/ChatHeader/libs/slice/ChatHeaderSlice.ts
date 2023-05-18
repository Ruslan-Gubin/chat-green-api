import {  createSlice } from "@reduxjs/toolkit";
import { TypeRootState } from "../../../../app/store/store";
import { IChatHeaderState } from "../types/IChatHeaderState";
import { fetchUserInfo } from "./useGetAuthThunk";


const initialState: IChatHeaderState = {
 userAvatar: null,
 error: null,
 loading: false,
};

export const chatHeaderSlice = createSlice({
  name: "chatHeaderSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchUserInfo.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchUserInfo.rejected, (state) => {
      state.loading = false
      state.error = 'Server Error'
    })
    .addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.userAvatar = action.payload.avatar
      state.error = null
      state.loading = false
    }) 


  },
    

});

export const selectChatHeader = (state: TypeRootState) => state.chatHeaderSlice;

export const chatHeaderAction = chatHeaderSlice.actions;

export const chatHeaderReducer = chatHeaderSlice.reducer;