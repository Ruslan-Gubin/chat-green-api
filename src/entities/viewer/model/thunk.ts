import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAuthInfo } from '../api/viewer-api';
import { IRequestParam, ResponseAuthPromise } from './types';


export const fetchAuthData = createAsyncThunk<ResponseAuthPromise, IRequestParam>('viewerSlice/fetchAuthData', async(input) => {
  const response = await fetchAuthInfo<{wid: string}>(input.instance, input.token)
  
  return {response, inputs: {...input}} as ResponseAuthPromise
})
