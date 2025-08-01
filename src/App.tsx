import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"

import Header  from "./features/header/Header.tsx"
import AboutVision from "./features/aboutVision/AboutVision.tsx"

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
        </Routes>
      </div>
    </BrowserRouter>
  </div>
)
