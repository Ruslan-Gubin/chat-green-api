import { useAppDispatch, useAppSelector } from "@/app/hooks/useAppSelector";
import { useRouters } from "@/app/hooks/useRouter";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { validateInstance, validateToken } from "../helpers/validInput";
import { authAction, selectAuth } from "../slice/authSlice";
import { fetchAuthData } from "../slice/authThunk";
import { IUserLoginValue } from "../types/IUserLoginValue";

const useSubmitLogin = () => {
  const [userValue, setUserValue] = useState<IUserLoginValue>({
    instance: { text: '', error: false },
    token: { text: "", error: false },
  });
  const auth = useAppSelector(selectAuth)
  const dispatch = useAppDispatch();
  const { routerPushPage } = useRouters();


  useEffect(() => {
    if (!auth.error && auth.ApiTokenInstance && !auth.loading) {
      routerPushPage("/");
     } 
  },[auth, routerPushPage])

  const handleChangeEaeViews = useCallback(() => {
    dispatch(authAction.viewsPasswordToggle())
  }, [dispatch]);

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const unputName = e.target.id;
      setUserValue((prev) => ({
        ...prev,
        [unputName]: { ...prev.email, text: e.target.value },
      }));
    },
    []
  );

  const validInputs = useCallback((e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const checkInstace = validateInstance(+userValue.instance.text);
    const checkToken = validateToken(userValue.token.text);

    const checkInputs = [
      { input: "instance", check: checkInstace },
      { input: "token", check: checkToken },
    ];

    checkInputs.forEach((item) => {
      const input = item.input;

      if (!item.check) {
        setUserValue((prev) => ({
          ...prev,
          [input]: { ...prev[input], error: true },
        }));
      } else {
        setUserValue((prev) => ({
          ...prev,
          [input]: { ...prev[input], error: false },
        }));
      }
    });

    const validInputError = checkInputs.find((item) => !item.check);
    
   if (validInputError) return;
   
   dispatch(fetchAuthData({ instance: +userValue.instance.text, token: userValue.token.text }))
       
  }, [dispatch, userValue]);

  return {
    handleChangeInput,
    validInputs,
    viewsPassworld: auth.viewsPassworld,
    handleChangeEaeViews,
    userValue,
    setUserValue,
  };
};

export { useSubmitLogin };
