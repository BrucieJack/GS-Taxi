import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useUserSelector = () => useAppSelector((state) => state.user.user);
export const useMessageSelector = () =>
  useAppSelector((state) => state.alert?.message);
