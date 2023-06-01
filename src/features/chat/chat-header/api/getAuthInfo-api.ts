import { fetchPost, methodsApi } from "@/shared";

export const getAuthInfo = <T>(
  instance: number,
  token: string,
  body: { chatId: string }
): Promise<T> => {
  return fetchPost(
    { idInstance: instance, method: methodsApi.getContactInfo, token },
    body
  );
};
