export interface IAdmin {
	login: string
	password: string
}

export interface AdminState extends IAdmin {
	isLoginned: boolean
}

export interface SetIsLoginned {
	isLoginned: boolean
}

export interface SetLogin {
	login: string
}

export interface SetPassword {
	password: string
}