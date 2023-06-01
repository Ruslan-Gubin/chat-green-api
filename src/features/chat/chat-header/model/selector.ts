import { useAppDispatch, useAppSelector } from "@/shared";
import { chatHeaderSlice } from "./slice";
import { fetchUserInfo } from "./thunk";
import { IUserInfoBody } from "./types";

const select = (state: RootState) => state.chatHeader;
const action = chatHeaderSlice.actions;
export const chatHeaderReducer = chatHeaderSlice.reducer;

export const useChatHeaderSelect = () => {
  return useAppSelector(select);
};

export const useChatHeaderAction = () => {
  const dispatch = useAppDispatch();

  return {
    fetchUserInfo: ({ instance, token, wid }: IUserInfoBody) =>
      dispatch(fetchUserInfo({ instance, token, wid })),
  };
};
