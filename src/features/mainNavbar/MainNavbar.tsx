import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from "reactstrap"
import { Link } from "react-router-dom";

import styles from "./MainNavbar.module.css"

function MainNavbar() {
  return (
    <Navbar expand={"md"}>
      <NavbarBrand className={ styles.textColorLight }>Lovelady Baptist Church</NavbarBrand>
      <Nav navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            About
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/aboutVision" }>Our Vision</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>What We Believe</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>Planning Your Visit</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>Service Times</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>Leadership</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Connect
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight }>Prayer Requests</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>Watch Online</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>Contact Us</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Resources
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight }>Daily Journey</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Events
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight }>Men&#39;s Activities</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>Women&#39;s Activities</DropdownItem>
            <DropdownItem className={ styles.textColorLight }>Senior Adult Activities</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Give
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight }>Donate</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  )
}

export default MainNavbar;
