import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { waitFor } from "@testing-library/react"
import { http, HttpResponse } from "msw"

import type { PrayersApiResponse } from "./prayersApiSlice"
import {
  prayersApiSlice,
  useGetPrayersQuery,
} from "./prayersApiSlice"
import { server, customizedPrayers } from "./prayersTestServer.ts"
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

describe("prayersApiSlice -> endpoints", () => {
  it("defines prayersApi slice with getPrayers endpoint", () => {
    expect(prayersApiSlice.reducerPath).toBe("prayersApi")
    expect(prayersApiSlice.endpoints.getPrayers).toBeDefined()
    expect(typeof useGetPrayersQuery).toBe("function")
  })
})

describe("prayersApiSlice -> happy -> useGetPrayersQuery", () => {
  it("resolves prayers correctly", async () => {
    server.use(
      http.get<never, never, PrayersApiResponse>("/api/v1/prayers/", () => {
        return HttpResponse.json({ prayers: customizedPrayers })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetPrayersQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data?.prayers).toEqual(customizedPrayers)
  })

  it("resolves empty results array correctly", async () => {
    server.use(
      http.get<never, never, PrayersApiResponse>("/api/v1/prayers/", () => {
        return HttpResponse.json({ prayers: [] })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetPrayersQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(result.current.data?.prayers).toEqual([])
  })
})

describe("prayersApiSlice -> unhappy -> useGetPrayersQuery", () => {
  it("should properly process a 500 server error", async () => {
    server.use(
      http.get<never, never, PrayersApiResponse>("/api/v1/prayers/", () => {
        return new HttpResponse(null, { status: 500 })
      })
    )

    const { result } = renderHookWithProvider(() =>
      useGetPrayersQuery(undefined)
    )

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    expect(result.current.isError).toBe(true)
    expect((result.current.error as FetchBaseQueryError).status).toBe(500)
  })
})
