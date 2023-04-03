import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IAdmin } from '@/types/admin'

const adminApi = createApi({
	reducerPath: 'adminApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
	endpoints: (builder) => ({
		getAllAdmins: builder.query<IAdmin[], null>({
			query: () => 'admins'
		})
	})
})

export default adminApi