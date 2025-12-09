import { useState } from "react"
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown
} from "reactstrap"
import { Link } from "react-router-dom";

import styles from "./MainNavbarMobile.module.css"

function MainNavbarMobile() {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => { setIsOpen(!isOpen); };

  return (
    <Navbar fill expand={ "md" } className={ styles.navbar } light>
      <NavbarBrand className={ "me-auto" } style={{ color: "#DDDDDD" }}>
        Lovelady Baptist Church
      </NavbarBrand>
      <NavbarToggler onClick={ toggle } className={ styles.toggler } />
      <Collapse isOpen={ isOpen } navbar style={{ marginTop: "15px" }}>
        <Nav navbar vertical>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className={ styles.textColorLight } style={{ paddingLeft : "15px" }} nav caret>
              About
            </DropdownToggle>
            <DropdownMenu style={{ padding: "unset" }}>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/aboutBelieve" }
              >
                What We Believe
              </DropdownItem>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/aboutVisit" }
              >
                Planning Your Visit
              </DropdownItem>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={"/aboutTimes"}
              >
                Service Times
              </DropdownItem>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/aboutLeadership" }
              >
                Leadership
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className={ styles.textColorLight } style={{ paddingLeft : "15px" }} nav caret>
              Connect
            </DropdownToggle>
            <DropdownMenu style={{ padding: "unset" }}>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/connectRequests" }
              >
                Prayer Requests
              </DropdownItem>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/connectOnline" }
              >
                Watch Online
              </DropdownItem>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/connectUs" }
              >
                Contact Us
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className={ styles.textColorLight } style={{ paddingLeft : "15px" }} nav caret>
              Resources
            </DropdownToggle>
            <DropdownMenu style={{ padding: "unset" }}>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/resourcesJourney" }
              >
                Daily Journey
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className={ styles.textColorLight } style={{ paddingLeft : "15px" }} nav caret>
              Events
            </DropdownToggle>
            <DropdownMenu style={{ padding: "unset" }}>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/eventsMensActivities" }
              >
                Men&#39;s Activities
              </DropdownItem>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/eventsWomensActivities" }
              >
                Women&#39;s Activities
              </DropdownItem>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/eventsSeniorActivities" }
              >
                All Church Activities
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className={ styles.textColorLight } style={{ paddingLeft : "15px" }} nav caret>
              Give
            </DropdownToggle>
            <DropdownMenu style={{ padding: "unset" }}>
              <DropdownItem
                className={ styles.textColorLight }
                tag={ Link }
                to={ "/giveDonate" }
              >
                Donate
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default MainNavbarMobile;
