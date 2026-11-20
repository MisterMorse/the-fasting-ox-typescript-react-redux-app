import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { waitFor } from "@testing-library/react"
import { http, HttpResponse } from "msw"

import type { JourneysApiResponse } from "./journeysApiSlice"
import {
  journeysApiSlice,
  useGetJourneysQuery,
} from "./journeysApiSlice"
import { server, customizedJourneys } from "./journeysTestServer.ts"
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

describe("journeysApiSlice -> endpoints", () => {
  it("defines journeysApi slice with getJourneys endpoint", () => {
    expect(journeysApiSlice.reducerPath).toBe("journeysApi")
    expect(journeysApiSlice.endpoints.getJourneys).toBeDefined()
    expect(typeof useGetJourneysQuery).toBe("function")
  })
})

describe("journeysApiSlice -> happy -> useGetJourneysQuery", () => {
  it("resolves journeys correctly", async () => {
    server.use(
      http.get<never, never, JourneysApiResponse>("/api/v1/journeys/", () => {
        return HttpResponse.json({ journeys: customizedJourneys })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetJourneysQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data?.journeys).toEqual(customizedJourneys)
  })

  it("resolves empty results array correctly", async () => {
    server.use(
      http.get<never, never, JourneysApiResponse>("/api/v1/journeys/", () => {
        return HttpResponse.json({ journeys: [] })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetJourneysQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data?.journeys).toEqual([])
  })
})

describe("journeysApiSlice -> unhappy -> useGetJourneysQuery", () => {
  it("should properly process a 500 server error", async () => {
    server.use(
      http.get<never, never, JourneysApiResponse>("/api/v1/journeys/", () => {
        return new HttpResponse(null, { status: 500 })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetJourneysQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.isError).toBe(true)
    expect((result.current.error as FetchBaseQueryError).status).toBe(500)
  })
})
