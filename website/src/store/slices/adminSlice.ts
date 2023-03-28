import { AdminState, SetIsLoginned, SetLogin, SetPassword } from "@/types/admin"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: AdminState = {
	login: '',
	password: '',
	isLoginned: false
}

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		setAdminIsLoginned: (state: AdminState, action: PayloadAction<SetIsLoginned>) => {
			state.isLoginned = action.payload.isLoginned
		},
		setAdminLogin: (state: AdminState, action: PayloadAction<SetLogin>) => {
			state.login = action.payload.login
		},
		setAdminPassword: (state: AdminState, action: PayloadAction<SetPassword>) => {
			state.password = action.payload.password
		}
	}
})

export const { setAdminIsLoginned, setAdminLogin, setAdminPassword } = adminSlice.actions
export default adminSlice