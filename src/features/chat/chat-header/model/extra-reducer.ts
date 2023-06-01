import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { fetchUserInfo } from './thunk'
import {  IChatHeaderState } from './types'


export const extraReducers = (builder: ActionReducerMapBuilder<IChatHeaderState>) => {
	builder
	.addCase(fetchUserInfo.pending, (state) => {
		state.loading = true
		state.error = null
	})
	.addCase(fetchUserInfo.rejected, (state) => {
		state.loading = false
		state.error = 'Server Error'
	})
	.addCase(fetchUserInfo.fulfilled, (state, action) => {
		state.userAvatar = action.payload.avatar
		state.error = null
		state.loading = false
	}) 
	
}