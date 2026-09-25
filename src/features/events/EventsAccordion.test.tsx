import { screen } from "@testing-library/react"
import { vi } from "vitest"

import { renderWithProviders } from "../../utils/test-utils"
import EventsAccordion from "./EventsAccordion"
import * as eventsApi from "./eventsApiSlice"
import { createEventMock } from "./eventTestServer.ts"

describe("EventsAccordion", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders loading message", () => {
    vi.spyOn(eventsApi, "useGetEventsByCategoryQuery").mockReturnValue({
      isLoading: true,
      isError: false,
      isSuccess: false,
      data: undefined,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof eventsApi.useGetEventsByCategoryQuery>)

    renderWithProviders(<div>{ EventsAccordion("Men") }</div>)
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument()
  })

  it("renders error message", () => {
    vi.spyOn(eventsApi, "useGetEventsByCategoryQuery").mockReturnValue({
      isLoading: false,
      isError: true,
      isSuccess: false,
      data: undefined,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof eventsApi.useGetEventsByCategoryQuery>)

    renderWithProviders(<div>{ EventsAccordion("Men") }</div>)
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument()
  })

  it("renders empty message when no events exist", () => {
    vi.spyOn(eventsApi, "useGetEventsByCategoryQuery").mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: true,
      data: { events: [] },
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof eventsApi.useGetEventsByCategoryQuery>)

    renderWithProviders(<div>{ EventsAccordion("Men") }</div>)
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument()
  })

  const event = createEventMock({ category: "Men" });
  it("renders events list when events are present", () => {
    vi.spyOn(eventsApi, "useGetEventsByCategoryQuery").mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: true,
      data: {
        events: [event,],
      },
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof eventsApi.useGetEventsByCategoryQuery>)

    renderWithProviders(<div>{ EventsAccordion("Men") }</div>)
    expect(screen.getByText(event.name)).toBeInTheDocument()
  })
})
