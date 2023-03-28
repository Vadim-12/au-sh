import React, { Children } from 'react'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

const AdminLayout = ({children}: any) => {
	return (
		<>
			<AdminHeader/>
			<main>
				{children}
			</main>
			<AdminFooter/>
		</>
	)
}

export default AdminLayout