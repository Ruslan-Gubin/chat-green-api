import {  fetchPost } from "@/app/api/baseApi"
import { appConstants } from "@/app/constants/appConstants"


const sendMessage = <T, B>(instance: number, token: string, body: B): Promise<T> => { 
  return fetchPost({idInstance: instance, method: appConstants.methodApi.sendMessage, token}, body)
}



export { sendMessage }