import { screen } from "@testing-library/react"
import { vi } from "vitest"

import { renderWithProviders } from "../../../utils/test-utils"
import * as eventsApi from "../eventsApiSlice"
import { createEventMock } from "../eventTestServer.ts"
import EventsWomensActivities from "./EventsWomensActivities.tsx"

describe("EventsWomensActivities", () => {
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
            name: "Women's Breakfast",
          }),
        ],
      },
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof eventsApi.useGetEventsByCategoryQuery>)

    renderWithProviders(<EventsWomensActivities />)
    expect(
      screen.getByRole("heading", { name: "Women's Activities", level: 3 }),
    ).toBeInTheDocument()
    expect(screen.getByText("Women's Breakfast")).toBeInTheDocument()
  })
})
