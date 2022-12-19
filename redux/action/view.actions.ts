import { ViewState } from '../../types/view.types'

export const toggleUIMode = (state: ViewState) => {
	state.mode = state.mode === 'light' ? 'dark' : 'light'
}

