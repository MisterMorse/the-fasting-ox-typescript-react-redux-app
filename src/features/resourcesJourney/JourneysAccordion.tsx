import type { JSX } from "react"

import { useGetJourneysQuery } from "./journeysApiSlice.ts"

const JourneysAccordion = (): JSX.Element | null => {
  const { data, isError, isLoading, isSuccess } = useGetJourneysQuery(undefined)

  if (isError) {
    return (
      <div>
        <h5>
          { import.meta.env.VITE_MESSAGE_JOURNEYS_FAILURE }
        </h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h5>
          { import.meta.env.VITE_MESSAGE_JOURNEYS_LOADING }
        </h5>
      </div>
    )
  }

  if (isSuccess) {
    if (data.journeys.length > 0) {
      return (
        <div>
          { data.journeys.map(
            ({ id, date, title, verse, thought, prayer, deeper }) => (
              <div key={ id }>
                <h5>
                  { date } - { title }
                </h5>
                <h6 style={{ fontStyle: "italic" }}>{ verse }</h6>
                <h6>Today's Thought</h6>
                <p>{ thought }</p>
                <h6>Today's Prayer</h6>
                <p>{ prayer }</p>
                <h6 style={{ fontStyle: "italic" }}>Further Reading: { deeper }</h6>
              </div>
            ),
          )}
        </div>
      )
    } else {
      return (
        <div>
          <h5>
            { import.meta.env.VITE_MESSAGE_JOURNEYS_EMPTY }
          </h5>
        </div>
      )
    }
  }

  return null
}

export default JourneysAccordion
