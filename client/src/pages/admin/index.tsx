import AdminLayout from '@/components/admin/AdminLayout'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { API_URL } from '@/store/static'
import { AdminState } from '@/types/admin'
import axios from 'axios'
import React, { useState } from 'react'

const Admin = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	
	const dispatch = useAppDispatch()
	const admins: AdminState = useAppSelector(state => state.admin)

	function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLogin(e.target.value)
	}
	function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value)
	}
	function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		
		const admin = admins.find(admin => admin.login === login)

		if (!admin) {
			setError('Администратора с таким логином не найдено.')
			return
		}
		if (admin.password !== password) {
			setError('Неверный пароль.')
			return
		}

		
	}

	return (
		<AdminLayout>
			<div className="container">
				<h1>Панель администратора</h1>
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
			</div>
		</AdminLayout>
	)
}

export default Admin