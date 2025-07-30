import "bootstrap/dist/css/bootstrap.min.css";

import churchBW from "../../assets/images/churchBW.png";
import MainNavbar from "../mainNavbar/MainNavbar.tsx"

function Header() {
  return (
    <div style={{ backgroundImage: `url(${churchBW})`, backgroundSize: "cover", padding: "25px 250px 250px 250px" }}>
      <MainNavbar></MainNavbar>
    </div>
  )
}

export default Header;
