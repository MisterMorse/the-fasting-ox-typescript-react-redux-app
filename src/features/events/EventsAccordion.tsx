import type { JSX } from "react"
import { useGetEventsByCategoryQuery } from "./eventsApiSlice.ts"

const EventsAccordion = (category: string): JSX.Element | null => {
  const { data, isError, isLoading, isSuccess } = useGetEventsByCategoryQuery(category)

  if (isError) {
    return (
      <div>
        <h5>
          Whoops! Error loading events.
        </h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h5>
          Loading events...
        </h5>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div>
        { data.events.map(({ id, name, description, location, date, start_time, end_time, day_of_week }) => (
          <div key={ id }>
            <h3>
              { name }
            </h3>
            <h5>
              { day_of_week }, { date }
              { start_time } - { end_time }<br/>
              { location }
            </h5>
            <p>
              { description }
            </p>
          </div>
        )) }
      </div>
    )
  }

  return null
}

export default EventsAccordion
