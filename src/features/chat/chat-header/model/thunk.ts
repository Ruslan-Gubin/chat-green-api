import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthInfo } from "../api/getAuthInfo-api";
import { IChatUserInfoResponse, IUserInfoBody } from "./types";

export const fetchUserInfo = createAsyncThunk<
  IChatUserInfoResponse,
  IUserInfoBody
>("chatHeader/fetchUserInfo", async (auth) => {
  const response = await getAuthInfo<IChatUserInfoResponse>(
    auth.instance,
    auth.token,
    { chatId: auth.wid }
  );

  return response;
});
