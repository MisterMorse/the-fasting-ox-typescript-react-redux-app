import { screen } from "@testing-library/react"
import { vi } from "vitest"

import { renderWithProviders } from "../../../utils/test-utils"
import * as eventsApi from "../eventsApiSlice"
import { createEventMock } from "../eventTestServer.ts"
import EventsSeniorActivities from "./EventsSeniorActivities.tsx"

describe("EventsSeniorActivities", () => {
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
            name: "Senior Breakfast",
          }),
        ],
      },
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof eventsApi.useGetEventsByCategoryQuery>)

    renderWithProviders(<EventsSeniorActivities />)
    expect(
      screen.getByRole("heading", { name: "Senior Activities", level: 3 }),
    ).toBeInTheDocument()
    expect(screen.getByText("Senior Breakfast")).toBeInTheDocument()
  })
})
