import { faker } from "@faker-js/faker"
import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"

import type { Journey, JourneysApiResponse } from "./journeysApiSlice.ts"

export const createJourneyMock = (overrides: Partial<Journey> = {}): Journey => ({
  id: faker.number.int(),
  date: faker.date.past().toISOString(),
  title: faker.company.buzzPhrase(),
  verse: faker.lorem.sentence(),
  thought: faker.lorem.paragraph(),
  prayer: faker.lorem.paragraph(),
  deeper: faker.lorem.paragraph(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
  ...overrides,
})

export const customizedJourneys: Journey[] = [
  createJourneyMock({ id: 1, title: "Walking In Faith" }),
  createJourneyMock({ id: 2, title: "Rest For The Weary" }),
  createJourneyMock({ id: 3, title: "Bread Of Life" }),
]

export const differingJourneys: Journey[] = [
  createJourneyMock({ id: 4, title: "General Revelation" }),
  ...customizedJourneys,
]

export const handlers = [
  http.get<never, never, JourneysApiResponse>("/api/v1/journeys/", () => {
    return HttpResponse.json({ journeys: differingJourneys })
  }),
]

export const server = setupServer(...handlers)
