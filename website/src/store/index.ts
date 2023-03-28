import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import adminApi from './api/adminService'
import adminSlice from './slices/adminSlice'
import carSlice from './slices/carSlice'
import pageSlice from './slices/pageSlice'

const store = configureStore({
	reducer: {
		cars: carSlice.reducer,
		curPage: pageSlice.reducer,
		admin: adminSlice.reducer,
		[adminApi.reducerPath]: adminApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(adminApi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch