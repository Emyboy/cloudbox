import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '../../types/auth.types'
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthState = {
	user: null
}

export const counterSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserData: (state, action) => {
            state.user = action.payload
        },
		
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value += action.payload
		// },
	},
})

// Action creators are generated for each case reducer function
export const { setUserData } = counterSlice.actions

export default counterSlice.reducer
