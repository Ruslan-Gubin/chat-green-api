import { fetchDelete, fetchGet, fetchPost, methodsApi } from "@/shared";

export const getChatHistory = <T>(
  instance: number,
  token: string,
  body: { chatId: string }
): Promise<T> => {
  return fetchPost(
    { idInstance: instance, method: methodsApi.getChatHistory, token },
    body
  );
};

export const receiveMessage = <T>(
  instance: number,
  token: string
): Promise<T> => {
  return fetchGet({
    idInstance: instance,
    method: methodsApi.receiveNotification,
    token,
  });
};

export const deleteNotification = <T>(
  instance: number,
  token: string,
  params: number
): Promise<T> => {
  return fetchDelete(
    { idInstance: instance, method: methodsApi.deleteNotification, token },
    null,
    params
  );
};
