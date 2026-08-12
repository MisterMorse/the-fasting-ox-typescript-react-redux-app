import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, NavbarBrand } from "reactstrap"

function FooterDesktop() {
  return (
    <Navbar fill expand={ "md" } light>
      <NavbarBrand style={{ color: "#DDDDDD", fontSize: "0.8rem", padding: ".5% 20%" }}>
        Copyright © 2026 Code Lahaina LLC. All rights reserved. Site by Matt Harp.
      </NavbarBrand>
    </Navbar>
  )
}

export default FooterDesktop;
