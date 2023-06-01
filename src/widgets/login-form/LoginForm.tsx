import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { InputRG, useRouters } from "@/shared";
import { useViewer, useViewerAction } from "@/entities";
import { IUserLoginValue } from "@/features/login-form/model";
import { FormRegistration } from "@/features";

const LoginForm: FC = () => {
  const [userValue, setUserValue] = useState<IUserLoginValue>({
    instance: { text: "", error: false },
    token: { text: "", error: false },
  });
  const { error, ApiTokenInstance, loading, viewsPassworld } = useViewer();
  const { togglePassword } = useViewerAction();
  const { routerPushPage } = useRouters();

  useEffect(() => {
    if (!error && ApiTokenInstance && !loading) {
      routerPushPage("/");
    }
  }, [error, ApiTokenInstance, loading, routerPushPage]);

  const handleChangeEaeViews = () => {
    togglePassword();
  };

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const unputName = e.target.id;
    setUserValue((prev) => ({
      ...prev,
      [unputName]: { ...prev.email, text: e.target.value },
    }));
  }, []);

  return (
    <FormRegistration setUserValue={setUserValue} userValue={userValue}>
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
    </FormRegistration>
  );
};

export { LoginForm };
