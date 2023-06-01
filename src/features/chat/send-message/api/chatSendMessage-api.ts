import { fetchPost, methodsApi } from "@/shared";

const sendMessage = <T, B>(
  instance: number,
  token: string,
  body: B
): Promise<T> => {
  return fetchPost(
    { idInstance: instance, method: methodsApi.sendMessage, token },
    body
  );
};

export { sendMessage };
