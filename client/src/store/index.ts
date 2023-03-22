import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './slices/adminSlice'
import carSlice from './slices/carSlice'
import pageSlice from './slices/pageSlice'

const store = configureStore({
	reducer: {
		cars: carSlice.reducer,
		curPage: pageSlice.reducer,
		admin: adminSlice.reducer
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch