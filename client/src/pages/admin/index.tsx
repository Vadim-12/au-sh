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
	let admin: AdminState = useAppSelector(state => state.admin)
	const { data } = adminApi.useGetAllAdminsQuery(null)

	useEffect(() => {
		const admins = data?.length ? data : []
		setAdmins(admins)
	}, [data])

	useEffect(() => {
		let adminFromLS = localStorage.getItem('admin')

		if (adminFromLS) {
			const ans: AdminState = JSON.parse(adminFromLS)

			dispatch(setAdminIsLoginned({
				isLoginned: ans.isLoginned
			}))
			dispatch(setAdminLogin({
				login: ans.login
			}))
			dispatch(setAdminPassword({
				password: ans.password
			}))
		}
	}, [])

	function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLogin(e.target.value)
	}
	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}
	function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		
		const fAdmin = admins.find(admin => admin.login === login)
		//console.log(admin)

		if (!fAdmin) {
			setInputError('администратора с таким логином не найдено.')
			return
		}

		if (fAdmin.password !== password) {
			setInputError('неверный пароль.')
			return
		}

		const admin: AdminState = {
			...fAdmin,
			isLoginned: true
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
		localStorage.setItem('admin', JSON.stringify(admin))
		
		setLogin('')
		setPassword('')
		setInputError('')
	}

	return (
		<AdminLayout>
			<div className="container">
				<h1>Панель администратора</h1>
					{admins.length}<br/>
					Авторизован: {String(admin.isLoginned)}<br/>
					Логин: {admin.login}<br/>
					Пароль: {admin.password}

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
					inputError && <div className='auth-error'>Ошибка входа: {inputError}</div>
				}
			</div>
		</AdminLayout>
	)
}

export default Admin