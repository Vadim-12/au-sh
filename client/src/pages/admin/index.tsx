import AdminLayout from '@/components/admin/AdminLayout'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { AdminState, IAdmin } from '@/types/admin'
import React, { useEffect, useState } from 'react'
import adminApi from '@/store/api/adminService'
import { setAdminIsLoginned, setAdminLogin, setAdminPassword } from '@/store/slices/adminSlice'

const Admin = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [inputError, setInputError] = useState('')
	const [admins, setAdmins] = useState<IAdmin[]>([])
	
	const dispatch = useAppDispatch()
	const admin: AdminState = useAppSelector(state => state.admin)
	const { data } = adminApi.useGetAllAdminsQuery(null)

	useEffect(() => {
		const admins = data?.length ? data : []
		setAdmins(admins)
	}, [])

	function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLogin(e.target.value)
	}
	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}
	function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		
		const admin = admins.find(admin => admin.login === login)
		console.log(admin)

		if (!admin) {
			setInputError('Администратора с таким логином не найдено.')
			return
		}
		if (admin.password !== password) {
			setInputError('Неверный пароль.')
			return
		}

		dispatch(setAdminIsLoginned({
			isLoginned: true
		}))
		dispatch(setAdminLogin({
			login
		}))
		dispatch(setAdminPassword({
			password
		}))
		
		setLogin('')
		setPassword('')
		setInputError('')
	}

	return (
		<AdminLayout>
			<div className="container">
				<h1>Панель администратора</h1>
				{
						!admin.isLoginned
					?
						<form action="" className='auth-form' onSubmit={handleSubmitForm}>
							<h2>Вход</h2>
							<div className='auth-input'>
								<div className="login-block">
									<label>Логин:</label>
									<input type='text' value={login} onChange={handleLoginChange}/>
								</div>
								<div className="password-block">
									<label>Пароль:</label>
									<input type='password' value={password} onChange={handlePasswordChange}/>
								</div>
							</div>
							<button type='submit'>Войти</button>
						</form>
					:
						<p>Вы успешно авторизовались!</p>
				}
				{
					inputError && <div>Ошибка входа: {inputError}</div>
				}
			</div>
		</AdminLayout>
	)
}

export default Admin