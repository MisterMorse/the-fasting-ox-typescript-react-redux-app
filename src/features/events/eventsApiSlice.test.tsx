import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { waitFor } from "@testing-library/react"
import { http, HttpResponse } from "msw"

import {
  eventsApiSlice,
  useGetEventsQuery,
  useGetEventsByCategoryQuery,
} from "./eventsApiSlice"
import { createEventMock, server, customizedEvents } from "./eventTestServer.ts"
import {
  renderHookWithProvider
} from "../../utils/test-utils.tsx"

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" })
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})

describe("eventsApiSlice -> endpoints", () => {
  it("defines eventsApi slice with getEvents and getEventsByCategory endpoints", () => {
    expect(eventsApiSlice.reducerPath).toBe("eventsApi")
    expect(eventsApiSlice.endpoints.getEvents).toBeDefined()
    expect(eventsApiSlice.endpoints.getEventsByCategory).toBeDefined()
    expect(typeof useGetEventsQuery).toBe("function")
    expect(typeof useGetEventsByCategoryQuery).toBe("function")
  })
})

describe("eventsApiSlice -> happy -> useGetEventsQuery", () => {
  it("resolves events correctly", async () => {
    server.use(
      http.get("/api/v1/events/", () => {
        return HttpResponse.json({ events: [customizedEvents] })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetEventsQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data?.events[0]).toEqual(customizedEvents)
  })
})

describe("eventsApiSlice -> unhappy -> useGetEventsQuery", () => {
  it("should properly process a 500 server error", async () => {
    server.use(
      http.get("/api/v1/events/", () => {
        return new HttpResponse(null, { status: 500 })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetEventsQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.isError).toBe(true)
    expect((result.current.error as FetchBaseQueryError).status).toBe(500)
  })
})

describe("eventsApiSlice -> happy -> useGetEventsByCategoryQuery", () => {
  it("resolves events correctly", async () => {
    const matchingEvent = createEventMock({ category: "Apologetics" })
    server.use(
      http.get("/api/v1/events/Apologetics/", () => {
        return HttpResponse.json({ events: [matchingEvent] })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetEventsByCategoryQuery("Apologetics")
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data?.events[0]).toEqual(matchingEvent)
  })

  it("resolves empty results array correctly", async () => {
    server.use(
      http.get("/api/v1/events/Apologetics/", () => {
        return HttpResponse.json({ events: [] })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetEventsByCategoryQuery("Apologetics")
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data?.events).toEqual([])
  })
})

describe("eventsApiSlice -> unhappy -> useGetEventsByCategory", () => {
  it("should properly process a 500 server error", async () => {
    server.use(
      http.get("/api/v1/events/Apologetics/", () => {
        return new HttpResponse(null, { status: 500 })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetEventsByCategoryQuery("Apologetics")
    )

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.isError).toBe(true)
    expect((result.current.error as FetchBaseQueryError).status).toBe(500)
  })
})
