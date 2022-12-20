import { createSlice } from '@reduxjs/toolkit'
import { UploadState } from '../../types/upload.types'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: UploadState = {
	showUploadQueue: false,
    showUploadPopup: false
}

export const counterSlice = createSlice({
	name: 'upload',
	initialState,
	reducers: {
		toggleUploadQueue: (state) => {
			state.showUploadQueue = !state.showUploadQueue
		},

		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload
		// },
	},
})

// Action creators are generated for each case reducer function
export const { toggleUploadQueue } = counterSlice.actions

export default counterSlice.reducer
