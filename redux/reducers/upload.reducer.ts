import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FileData } from '../../types/file.types'
import { UploadState } from '../../types/upload.types'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: UploadState = {
	showUploadQueue: false,
	showUploadPopup: false,
	uploadQueue: [],
}

export const counterSlice = createSlice({
	name: 'upload',
	initialState,
	reducers: {
		toggleUploadQueue: (state) => {
			state.showUploadQueue = !state.showUploadQueue
		},
		addFilesToQueue: (state, action: PayloadAction<FileData[]>) => {
			console.log('THE PAYLOAD --', action.payload)
			sessionStorage.setItem('files', JSON.stringify(action.payload))

			state.uploadQueue = [...state.uploadQueue, ...action.payload]
		},
		toggleUploadPopup: (state) => {
			state.showUploadPopup = !state.showUploadPopup
		},
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload
		// },
	},
})

// Action creators are generated for each case reducer function
export const { toggleUploadQueue, addFilesToQueue, toggleUploadPopup } =
	counterSlice.actions

export default counterSlice.reducer
