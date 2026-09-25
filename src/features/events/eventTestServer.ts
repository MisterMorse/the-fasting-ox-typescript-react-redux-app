import { faker } from "@faker-js/faker"
import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"

import type { Event } from "./eventsApiSlice.ts"

export const createEventMock = (overrides: Partial<Event> = {}): Event => ({
  id: faker.number.int(),
  category: faker.word.adjective(),
  name: faker.company.buzzPhrase(),
  description: faker.lorem.paragraph(),
  location: faker.location.streetAddress(),
  date: faker.date.future().toISOString(),
  start_time: faker.date.future().getTime().toString(),
  end_time: faker.date.future().getTime().toString(),
  day_of_week: faker.date.weekday(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
  ...overrides,
})

export const customizedEvents: Event[] = [
  createEventMock({ id: 1, category: "Apologetics", name: "Apologetics Conference" }),
  createEventMock({ id: 2, category: "Apologetics", name: "Theology Bonfire Talk" }),
  createEventMock({ id: 3, category: "Apologetics", name: "Romans Examination" }),
]

export const differingEvents: Event[] = [
  createEventMock({ id: 4, category: "Worship", name: "Praise Team Meeting" }),
  ...customizedEvents,
]

export const handlers = [
  http.get("/api/v1/events/", () => {
    return HttpResponse.json({ events: [differingEvents,] })
  }),

  http.get("/api/v1/events/:category/", ({ params }) => {
    const mockEvent = createEventMock({ category: params.category as string })
    return HttpResponse.json({ events: [mockEvent,] })
  }),
]

export const server = setupServer(...handlers)
