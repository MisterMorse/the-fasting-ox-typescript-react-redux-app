import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"

import Header  from "./features/header/Header.tsx"

export const App = () => (
  <div className="App">
    <Header></Header>
    <div style={{ backgroundColor: "#E05C42", padding: "25px" }}></div>
  </div>
)
