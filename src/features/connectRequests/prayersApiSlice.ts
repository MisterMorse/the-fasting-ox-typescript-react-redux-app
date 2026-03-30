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
  baseQuery: fetchBaseQuery({ baseUrl: "http://the-fasting-ox-alb-736827397.us-east-1.elb.amazonaws.com/" }),
  reducerPath: "prayersApi",
  tagTypes: ["Prayers"],
  endpoints: build => ({
    getPrayers: build.query<PrayersApiResponse, undefined>({
      query: () => `/prayers`,
      providesTags: ["Prayers"]
    })
  }),
})

export const { useGetPrayersQuery } = prayersApiSlice
