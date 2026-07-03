import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type Prayer = {
  id: number
  category: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

type PrayersApiResponse = {
  prayers: Prayer[]
}

export const prayersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL as string }),
  reducerPath: "prayersApi",
  tagTypes: ["Prayers"],
  endpoints: build => ({
    getPrayers: build.query<PrayersApiResponse, undefined>({
      query: () => `/api/v1/prayers/`,
      providesTags: ["Prayers"]
    })
  }),
})

export const { useGetPrayersQuery } = prayersApiSlice
