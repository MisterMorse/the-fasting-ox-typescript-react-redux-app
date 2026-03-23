import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import appStyle from "./App.module.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"

// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"

import AboutBelieve from "./features/aboutBelieve/AboutBelieve.tsx"
import AboutVisit from "./features/aboutVisit/AboutVisit.tsx";
import AboutTimes from "./features/aboutTimes/AboutTimes.tsx"
import AboutLeadership from "./features/aboutLeadership/AboutLeadership.tsx"
import ConnectRequests from "./features/connectRequests/ConnectRequests.tsx"
import ConnectOnline from "./features/connectOnline/ConnectOnline.tsx"
import ConnectUs from "./features/connectUs/ConnectUs.tsx"
import ResourcesJourney from "./features/resourcesJourney/ResourcesJourney.tsx"
import EventsMensActivities from "./features/events/eventsMensActivities/EventsMensActivities.tsx"
import EventsWomensActivities from "./features/events/eventsWomensActivities/EventsWomensActivities.tsx"
import EventsSeniorActivities from "./features/events/eventsSeniorActivities/EventsSeniorActivities.tsx"
import GiveDonate from "./features/giveDonate/GiveDonate.tsx"
import HeaderResponsive from "./features/headerResponsive/HeaderResponsive.tsx"

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <HeaderResponsive></HeaderResponsive>
      <h6 style={{ backgroundColor: "#E05C42", color: "#DDDDDD", padding: "12px" }}>
        Reaching out, sharing Christ
      </h6>
      <div className={ appStyle.spacing }>
        <Routes>
          <Route path="/" element=<AboutTimes/>/>
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
