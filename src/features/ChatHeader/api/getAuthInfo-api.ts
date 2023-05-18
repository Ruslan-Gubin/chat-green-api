import { fetchPost } from "@/app/api/baseApi"
import { appConstants } from "@/app/constants/appConstants"


const getAuthInfo = <T>(instance: number, token: string, body: { chatId: string }): Promise<T> => {
  return fetchPost({idInstance: instance, method: appConstants.methodApi.getContactInfo, token}, body)
}

export { getAuthInfo }