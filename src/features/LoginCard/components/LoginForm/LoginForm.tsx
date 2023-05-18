import { FC } from "react";
import { ButtonRG, InputRG } from "@/shared";
import { useSubmitLogin } from "../../libs/hooks/useSubmitLogin";

import styles from "./LoginForm.module.scss";


const LoginForm: FC = () => {
  const {
    viewsPassworld,
    handleChangeEaeViews,
    userValue,
    validInputs,
    handleChangeInput,
  } = useSubmitLogin();

  return (
    <form className={styles.root} onSubmit={validInputs}>
      <InputRG
        label="Instance"
        placeholder="Введите instance"
        errorText="Введите корректный instance"
        error={userValue.instance.error}
        value={userValue.instance.text}
        onChange={handleChangeInput}
        name="instance"
        type="number"
      />
      <InputRG
        label="Token"
        placeholder="Введите token"
        errorText="Введите корректный token"
        value={userValue.token.text}
        error={userValue.token.error}
        passwordEyeClick={handleChangeEaeViews}
        variant="password"
        onChange={handleChangeInput}
        name="token"
        type={viewsPassworld ? "string" : "password"}
      />
      <ButtonRG className={styles.submit_btn} type="submit" color="success">
        Войти
      </ButtonRG>
    </form>
  );
};

export { LoginForm };
