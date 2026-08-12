import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, NavbarBrand } from "reactstrap"

function FooterMobile() {
  return (
    <Navbar fill expand={ "md" } light>
      <NavbarBrand style={{ color: "#DDDDDD", fontSize: "0.8rem", padding: ".5%" }}>
        Copyright © 2026 Code Lahaina LLC.
      </NavbarBrand>
    </Navbar>
  )
}

export default FooterMobile;
