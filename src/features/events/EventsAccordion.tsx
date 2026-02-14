import type { JSX } from "react"
import { useGetEventsByCategoryQuery } from "./eventsApiSlice.ts"

const EventsAccordion = (category: string): JSX.Element | null => {
  const { data, isError, isLoading, isSuccess } = useGetEventsByCategoryQuery(category)

  if (isError) {
    return (
      <div>
        <h5>
          { import.meta.env.VITE_MESSAGE_EVENTS_FAILURE }
        </h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h5>
          { import.meta.env.VITE_MESSAGE_EVENTS_LOADING }
        </h5>
      </div>
    )
  }

  if (isSuccess) {
    if (data.events.length > 0) {
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
    } else {
      return (
        <div>
          <h5>
            { import.meta.env.VITE_MESSAGE_EVENTS_EMPTY }
          </h5>
        </div>
      )
    }
  }

  return null
}

export default EventsAccordion
