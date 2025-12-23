import global from "../../Features.module.css"
import EventsAccordion from "../EventsAccordion.tsx"

function EventsSeniorActivities() {
  return (
    <div>
      <h3 className={ global.heading }>
        Senior Activities
      </h3>
      <div className={ global.body }>
        { EventsAccordion("Seniors") }
      </div>
    </div>
  )
}

export default EventsSeniorActivities;
