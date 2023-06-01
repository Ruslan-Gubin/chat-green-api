import { useViewerAction } from "@/entities";
import { ButtonRG } from "@/shared";
import { Dispatch, FC, FormEvent, SetStateAction, useCallback } from "react";
import { validateInstance, validateToken } from "../libs/helpers";
import { IUserLoginValue } from "../model";

import styles from "./FormRegistration.module.scss";


interface FormRegistrationProps {
  children: React.ReactNode
  setUserValue: Dispatch<SetStateAction<IUserLoginValue>>
  userValue: IUserLoginValue
}

const FormRegistration:FC<FormRegistrationProps> = ({ children, setUserValue, userValue }) => {
  const { fetchAuthData } = useViewerAction()

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
   
   fetchAuthData({ instance: +userValue.instance.text, token: userValue.token.text })
       
  }, [ userValue, setUserValue, fetchAuthData ]);

  return (
    <form className={styles.root} onSubmit={validInputs}>
      {children}
      <ButtonRG className={styles.submit_btn} type="submit" color="success">
        Войти
      </ButtonRG>
    </form>
  );
};

export { FormRegistration };