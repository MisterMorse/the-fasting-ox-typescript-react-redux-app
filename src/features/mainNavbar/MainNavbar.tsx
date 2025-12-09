import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from "reactstrap"
import { Link } from "react-router-dom";

import styles from "./MainNavbar.module.css"

function MainNavbar() {
  return (
    <Navbar expand={ "md" }>
      <NavbarBrand className={ styles.textColorLight }>Lovelady Baptist Church</NavbarBrand>
      <Nav navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            About
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/aboutVision" }>Our Vision</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/aboutBelieve" }>What We Believe</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/aboutVisit" }>Planning Your Visit</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/aboutTimes" }>Service Times</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/aboutLeadership" }>Leadership</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Connect
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/connectRequests" }>Prayer Requests</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/connectOnline" }>Watch Online</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/connectUs"}>Contact Us</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Resources
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/resourcesJourney" }>Daily Journey</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Events
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/eventsMensActivities" }>Men&#39;s Activities</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/eventsWomensActivities" }>Women&#39;s Activities</DropdownItem>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/eventsSeniorActivities" }>Senior Adult Activities</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className={ styles.textColorLight } nav caret>
            Give
          </DropdownToggle>
          <DropdownMenu style={{ padding: "unset" }}>
            <DropdownItem className={ styles.textColorLight } tag={ Link } to={ "/giveDonate" }>Donate</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  )
}

export default MainNavbar;
