import { fetchGet } from "@/app/api/baseApi"
import { appConstants } from "@/app/constants/appConstants"

const fetchAuthInfo = <T>(instance: number, token: string): Promise<T> => {
 return fetchGet({idInstance: instance, method: appConstants.methodApi.getSettings, token })
}


export { fetchAuthInfo }