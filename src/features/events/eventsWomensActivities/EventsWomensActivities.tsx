import global from "../../Features.module.css"
import EventsAccordion from "../EventsAccordion.tsx"

function EventsWomensActivities() {
  return (
    <div>
      <h3 className={ global.heading }>
        Women's Activities
      </h3>
      <div className={ global.body }>
        { EventsAccordion("Women") }
      </div>
    </div>
  )
}

export default EventsWomensActivities;
