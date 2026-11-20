import { faker } from "@faker-js/faker"
import { http, HttpResponse } from "msw"
import { setupServer } from "msw/node"

import type { Prayer, PrayersApiResponse } from "./prayersApiSlice.ts"

export const createPrayerMock = (overrides: Partial<Prayer> = {}): Prayer => ({
  id: faker.number.int(),
  category: faker.word.adjective(),
  name: faker.person.fullName(),
  description: faker.lorem.paragraph(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
  ...overrides,
})

export const customizedPrayers: Prayer[] = [
  createPrayerMock({ id: 1, category: "Healing", name: "Recovery From Surgery" }),
  createPrayerMock({ id: 2, category: "Healing", name: "Strength Through Treatment" }),
  createPrayerMock({ id: 3, category: "Healing", name: "Peace In Recovery" }),
]

export const differingPrayers: Prayer[] = [
  createPrayerMock({ id: 4, category: "Praise", name: "New Grandchild" }),
  ...customizedPrayers,
]

export const handlers = [
  http.get<never, never, PrayersApiResponse>("/api/v1/prayers/", () => {
    return HttpResponse.json({ prayers: differingPrayers })
  }),
]

export const server = setupServer(...handlers)
