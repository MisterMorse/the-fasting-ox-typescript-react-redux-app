import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type Journey = {
  id: number
  date: string
  title: string
  verse: string
  thought: string
  prayer: string
  deeper: string
  created_at: string
  updated_at: string
}

type JourneysApiResponse = {
  journeys: Journey[]
}

export const journeysApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  reducerPath: "journeysApi",
  tagTypes: ["Journeys"],
  endpoints: build => ({
    getJourneys: build.query<JourneysApiResponse, undefined>({
      query: () => `/journeys/`,
      providesTags: ["Journeys"]
    })
  }),
})

export const { useGetJourneysQuery } = journeysApiSlice
