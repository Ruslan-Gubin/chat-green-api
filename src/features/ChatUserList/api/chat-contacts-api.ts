import { fetchGet, fetchPost } from "@/app/api/baseApi"
import { appConstants } from "@/app/constants/appConstants"

const getAllchats = <T>(instance: number, token: string): Promise<T> => {
 return fetchGet({ idInstance: instance, method: appConstants.methodApi.getChats, token })
}

const getContact = <T>(instance: number, token: string, body: { chatId: string }): Promise<T> => {
  return fetchPost({idInstance: instance, method: appConstants.methodApi.getContact, token}, body)
}

export { getAllchats,  getContact }