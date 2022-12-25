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
		setUploadState: (state, action:PayloadAction<UploadState|any>) => {
			state = {
				...state,
				...action.payload
			}
		},
		toggleUploadQueue: (state) => {
			state.showUploadQueue = !state.showUploadQueue
		},
		addFilesToQueue: (state, action: PayloadAction<FileData[]>) => {
			// console.log('THE PAYLOAD --', action.payload)
			state.showUploadQueue = true
			sessionStorage.setItem('files', JSON.stringify(action.payload))

			state.uploadQueue = [...action.payload, ...state.uploadQueue]
		},
		toggleUploadPopup: (state) => {
			state.showUploadPopup = !state.showUploadPopup
		},
		markQueueAsDone: (state, action: PayloadAction<number>) => {
			state.uploadQueue = state.uploadQueue.map((val) => {
				if (val.index === action.payload) {
					return {
						...val,
						isDone: true,
					}
				} else return val
			})
		},
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload
		// },
	},
})

// Action creators are generated for each case reducer function
export const {
	toggleUploadQueue,
	addFilesToQueue,
	toggleUploadPopup,
	markQueueAsDone,
	setUploadState
} = counterSlice.actions

export default counterSlice.reducer
