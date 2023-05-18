import { IRequestParam } from "@/app/types/IRequestParam";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuthInfo } from "../../api/auth-api";


interface ResponseAuthPromise extends IRequestParam {
  response: {wid: string}
  inputs: IRequestParam
}


const fetchAuthData = createAsyncThunk<ResponseAuthPromise, IRequestParam>('authSlice/fetchAuthData', async(input) => {
  const response = await fetchAuthInfo<{wid: string}>(input.instance, input.token)
  
  console.log(response)

  return {response, inputs: {...input}} as ResponseAuthPromise
})

export { fetchAuthData }