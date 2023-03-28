import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IAdmin } from '@/types/admin'
import { API_URL } from '../static'

const adminApi = createApi({
	reducerPath: 'adminApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getAllAdmins: builder.query<IAdmin[], null>({
			query: () => ({
				url: `${API_URL}/admin`
			})
		})
	})
})

export default adminApi