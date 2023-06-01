import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { fetchAuthData } from './thunk'
import {  ViewerInitState } from './types'


export const extraReducers = (builder: ActionReducerMapBuilder<ViewerInitState>) => {
	builder
	.addCase(fetchAuthData.pending, (state) => {
		state.loading = true
		state.error = null
	})
	.addCase(fetchAuthData.rejected, (state) => {
		state.loading = false
		state.error = 'action.error.message'
	})
	.addCase(fetchAuthData.fulfilled, (state, action) => {
		const { inputs, response } = action.payload
		
		state.wid = response.wid
		state.ApiTokenInstance = inputs.token
		state.IdInstance = inputs.instance
		state.loading = false
	})
	
}