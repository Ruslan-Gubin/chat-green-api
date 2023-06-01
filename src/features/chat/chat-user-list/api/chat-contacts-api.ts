import { fetchGet, fetchPost, methodsApi } from "@/shared";

export const getAllchats = <T>(instance: number, token: string): Promise<T> => {
  return fetchGet({ idInstance: instance, method: methodsApi.getChats, token });
};

export const getContact = <T>(
  instance: number,
  token: string,
  body: { chatId: string }
): Promise<T> => {
  return fetchPost(
    { idInstance: instance, method: methodsApi.getContact, token },
    body
  );
};
