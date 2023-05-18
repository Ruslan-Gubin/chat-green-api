import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, TypeRootState } from "../store/store";
 
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

export { useAppSelector, useAppDispatch };
