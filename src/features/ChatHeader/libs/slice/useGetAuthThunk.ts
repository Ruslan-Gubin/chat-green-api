import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthInfo } from "../../api/getAuthInfo-api";
import { IChatUserInfoResponse } from "../types/IChatUserInfoResponse";
import { IUserInfoBody } from "../types/IUserInfoBody";


const fetchUserInfo = createAsyncThunk<IChatUserInfoResponse, IUserInfoBody>("chatHeaderSlice/fetchUserInfo", async (auth) => {
  const response = await getAuthInfo<IChatUserInfoResponse>( auth.instance, auth.token, { chatId: auth.wid } );
 
  return response;
});


export { fetchUserInfo }