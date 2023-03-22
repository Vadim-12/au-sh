import { AdminState, SetIsLoginned } from "@/types/admin"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { API_URL } from "../static"

const initialState: AdminState = {
	login: '',
	password: '',
	isLoginned: false
}

// export const fetchAdmins = createAsyncThunk({
// 	'admin/fetchAdmins',
// 	async () => {
// 		const data = await axios.get(API_URL)
// 			.then(res => res.data)
// 	}
// })

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		setIsLoginned: (state: AdminState, action: PayloadAction<SetIsLoginned>) => {
			state.isLoginned = action.payload.isLoginned
		},
	}
})

export const { setIsLoginned } = adminSlice.actions
export default adminSlice