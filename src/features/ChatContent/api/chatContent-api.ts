import { fetchDelete, fetchGet, fetchPost } from "@/app/api/baseApi"
import { appConstants } from "@/app/constants/appConstants"


const getChatHistory = <T>(instance: number, token: string, body: { chatId: string }): Promise<T> => { 
  return fetchPost({idInstance: instance, method: appConstants.methodApi.getChatHistory, token}, body)
}

const receiveMessage = <T>(instance: number, token: string): Promise<T> => {
  return fetchGet({idInstance: instance, method: appConstants.methodApi.receiveNotification, token })
}

const deleteNotification = <T>(instance: number, token: string, params: number): Promise<T> => {
  return fetchDelete({idInstance: instance, method: appConstants.methodApi.deleteNotification, token }, null, params)
}


export { getChatHistory, receiveMessage, deleteNotification }