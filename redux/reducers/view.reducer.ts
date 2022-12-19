import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { ViewState } from '../../types/view.types'
import { toggleUIMode } from '../action/view.actions'

const initialState: ViewState = {
	mode: 'light',
	showNav: false
}

export const counterSlice = createSlice({
	name: 'view',
	initialState,
	reducers: {
		toggleMode: toggleUIMode,
		toggleNav: (state) => {
			state.showNav = !state.showNav
		},
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload
		// },
	},
})

// Action creators are generated for each case reducer function
export const { toggleMode, toggleNav } = counterSlice.actions

export default counterSlice.reducer
