import global from "../Features.module.css"
import JourneysAccordion from "./JourneysAccordion.tsx"

function ResourcesJourney() {
  return (
    <div>
      <h3 className={ global.heading }>
        Daily Journey
      </h3>
      <div className={ global.body }>
        { JourneysAccordion() }
      </div>
    </div>
  )
}

export default ResourcesJourney;
