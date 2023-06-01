import { fetchGet, methodsApi } from "@/shared"

export const fetchAuthInfo = <T>(instance: number, token: string): Promise<T> => {
 return fetchGet({idInstance: instance, method: methodsApi.getSettings, token })
}