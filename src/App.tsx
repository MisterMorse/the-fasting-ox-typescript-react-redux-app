import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"

import Header  from "./features/header/Header.tsx"
import AboutVision from "./features/aboutVision/AboutVision.tsx"
import AboutBelieve from "./features/aboutBelieve/AboutBelieve.tsx"
import AboutVisit from "./features/aboutVisit/AboutVisit.tsx";
import AboutTimes from "./features/aboutTimes/AboutTimes.tsx"
import AboutLeadership from "./features/aboutLeadership/AboutLeadership.tsx"
import ConnectRequests from "./features/connectRequests/ConnectRequests.tsx"
import ConnectOnline from "./features/connectOnline/ConnectOnline.tsx"
import ConnectUs from "./features/connectUs/ConnectUs.tsx"
import ResourcesJourney from "./features/resourcesJourney/ResourcesJourney.tsx"
import EventsMensActivities from "./features/eventsMensActivities/EventsMensActivities.tsx"
import EventsWomensActivities from "./features/eventsWomensActivities/EventsWomensActivities.tsx"
import EventsSeniorActivities from "./features/eventsSeniorActivities/EventsSeniorActivities.tsx"
import GiveDonate from "./features/giveDonate/GiveDonate.tsx"

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header></Header>
      <h3 style={{ backgroundColor: "#E05C42", color: "#DDDDDD", padding: "30px" }}>
        Reaching out, sharing Christ
      </h3>
      <div style={{ padding: "1% 20%" }}>
        <Routes>
          <Route path="/aboutVision" element=<AboutVision/>/>
          <Route path="/aboutBelieve" element=<AboutBelieve/>/>
          <Route path="/aboutVisit" element=<AboutVisit/>/>
          <Route path="/aboutTimes" element=<AboutTimes/>/>
          <Route path="/aboutLeadership" element=<AboutLeadership/>/>
          <Route path="/connectRequests" element=<ConnectRequests/>/>
          <Route path="/connectOnline" element=<ConnectOnline/>/>
          <Route path="/connectUs" element=<ConnectUs/>/>
          <Route path="/resourcesJourney" element=<ResourcesJourney/>/>
          <Route path="/eventsMensActivities" element=<EventsMensActivities/>/>
          <Route path="/eventsWomensActivities" element=<EventsWomensActivities/>/>
          <Route path="/eventsSeniorActivities" element=<EventsSeniorActivities/>/>
          <Route path="/giveDonate" element=<GiveDonate/>/>
        </Routes>
      </div>
    </BrowserRouter>
  </div>
)
