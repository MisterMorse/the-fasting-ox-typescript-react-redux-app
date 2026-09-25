import { screen } from "@testing-library/react"
import { vi } from "vitest"

import { renderWithProviders } from "../../../utils/test-utils"
import * as eventsApi from "../eventsApiSlice"
import { createEventMock } from "../eventTestServer.ts"
import EventsMensActivities from "./EventsMensActivities"

describe("EventsMensActivities", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders heading and activities content", () => {
    vi.spyOn(eventsApi, "useGetEventsByCategoryQuery").mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: true,
      data: {
        events: [
          createEventMock({
            name: "Men's Breakfast",
          }),
        ],
      },
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof eventsApi.useGetEventsByCategoryQuery>)

    renderWithProviders(<EventsMensActivities />)
    expect(
      screen.getByRole("heading", { name: "Men's Activities", level: 3 }),
    ).toBeInTheDocument()
    expect(screen.getByText("Men's Breakfast")).toBeInTheDocument()
  })
})
