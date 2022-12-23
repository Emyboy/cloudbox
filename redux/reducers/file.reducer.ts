import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FileState, UploadedFile } from '../../types/file.types'

const initialState: FileState = {
	recent_files: [],
}

export const counterSlice = createSlice({
	name: 'file',
	initialState,
	reducers: {
		setRecentFiles: (state, action: PayloadAction<UploadedFile[]>) => {
			state.recent_files = action.payload
		},

		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload
		// },
	},
})

// Action creators are generated for each case reducer function
export const { setRecentFiles } = counterSlice.actions

export default counterSlice.reducer
