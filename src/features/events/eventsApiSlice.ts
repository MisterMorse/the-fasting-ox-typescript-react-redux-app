import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiURL: string = import.meta.env.VITE_API_URL

type Event = {
  id: number
  category: string
  name: string
  description: string
  location: string
  date: string
  start_time: string
  end_time: string
  day_of_week: string
  created_at: string
  updated_at: string
}

type EventsApiResponse = {
  events: Event[]
}

export const eventsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
  reducerPath: "eventsApi",
  tagTypes: ["Events"],
  endpoints: build => ({
    getEvents: build.query<EventsApiResponse, void>({
      query: () => `/events`,
      providesTags: ["Events"]
    }),
    getEventsByCategory: build.query<EventsApiResponse, string>({
      query: (category) => `/events/${category}`,
      providesTags: ["Events"]
    })
  }),
})

export const { useGetEventsQuery, useGetEventsByCategoryQuery } = eventsApiSlice
