import global from "../../Features.module.css"
import EventsAccordion from "../EventsAccordion.tsx"

function EventsMensActivities() {
  return (
    <div>
      <h3 className={ global.heading }>
        Men's Activities
      </h3>
      <div className={ global.body }>
        { EventsAccordion("Men") }
      </div>
    </div>
  )
}

export default EventsMensActivities;
