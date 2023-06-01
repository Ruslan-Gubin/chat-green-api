import { useAppDispatch, useAppSelector } from "@/shared";
import { viewerSlice } from "./slice";
import {
 fetchAuthData
} from "./thunk";
import { IRequestParam } from "./types";


const select = (state: RootState) => state.viewer;
const action = viewerSlice.actions;
export const viewerReducer = viewerSlice.reducer;

export const useViewer = () => {
  return useAppSelector(select);
};

export const useViewerAction = () => {
  const dispatch = useAppDispatch();

  return {
    fetchAuthData: ({token, instance}: IRequestParam) => dispatch(fetchAuthData({token, instance})),
    togglePassword: () => dispatch(action.viewsPasswordToggle()),
  };
};

