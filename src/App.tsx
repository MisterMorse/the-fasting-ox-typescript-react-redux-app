import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"
import MainNavbar from "./features/mainNavbar/MainNavbar.tsx"

export const App = () => (
  <div className="App" style={{ marginLeft: "150px", marginRight: "150px" }}>
    <MainNavbar></MainNavbar>
  </div>
)
