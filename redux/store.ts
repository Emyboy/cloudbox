import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import uploadReducer from './reducers/upload.reducer'
import viewReducer from './reducers/view.reducer'

export const store = configureStore({
	reducer: {
		view: viewReducer,
		auth: authReducer,
		upload: uploadReducer
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
