import type { JSX } from "react"

import { useGetPrayersQuery } from "./prayersApiSlice.ts"

type Prayer = {
  id: number
  category: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

const Subgroup = (category: string, data: Prayer[]): JSX.Element => {
  const categoryPrayers: Prayer[] = data.filter(prayer => {
    return prayer.category === category
  })

  return (
    <div>
      <h4 style={{ paddingTop: "10px" }}>
        { category }
      </h4>
      { categoryPrayers.map(({ id, name, description }) => (
        <div key={ id }>
          <h5>
            { name }
          </h5>
          <p>
            { description }
          </p>
        </div>
      )) }
    </div>
  )
}

const PrayersAccordion = (): JSX.Element | null => {
  const { data, isError, isLoading, isSuccess } = useGetPrayersQuery(undefined)
  const categories: string[] = [...new Set(data?.prayers.map(prayer => prayer.category))];

  if (isError) {
    return (
      <div>
        <h5>
          { import.meta.env.VITE_MESSAGE_PRAYERS_FAILURE }
        </h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h5>
          { import.meta.env.VITE_MESSAGE_PRAYERS_LOADING }
        </h5>
      </div>
    )
  }

  if (isSuccess) {
    if (data.prayers.length > 0) {
      return (
        <div>
          { categories.map((category) => (
            Subgroup(category, data.prayers)
          )) }
        </div>
      )
    } else {
      return (
        <div>
          <h5>
            { import.meta.env.VITE_MESSAGE_PRAYERS_EMPTY }
          </h5>
        </div>
      )
    }
  }

  return null
}

export default PrayersAccordion
