import "bootstrap/dist/css/bootstrap.min.css";

import churchBW from "../../assets/images/churchBW.png";
import MainNavbar from "../mainNavbar/MainNavbar.tsx"

function Header() {
  return (
    <div style={{ backgroundImage: `url(${churchBW})`, backgroundSize: "cover", padding: "30px 15% 75px 15%" }}>
      <MainNavbar></MainNavbar>
      <div style={{ color: "#DDDDDD", paddingTop: "75px" }}>
        <h4 style={{ textAlign: "start" }}>"For since the creation of the world God’s invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that people are without excuse."</h4>
        <h4 style={{ textAlign: "end" }}>Romans 1:20</h4>
      </div>
    </div>
  )
}

export default Header;
