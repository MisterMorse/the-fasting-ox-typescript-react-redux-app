import { DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"

function ConnectRequests() {
  return (
    <div>
      <h3 style={{ padding: "25px", color: "#E05C42" }}>
        Prayer Requests
      </h3>
      <div style={{ textAlign: "start" }}>
        <DropdownToggle caret>
          General
        </DropdownToggle>
        <DropdownMenu style={{ padding: "unset" }}>
          <DropdownItem>Nathanial Adesanwo</DropdownItem>
          <DropdownItem>Donita Anderson</DropdownItem>
          <DropdownItem>Harold Anson</DropdownItem>
          <DropdownItem>Ashlyn Black</DropdownItem>
          <DropdownItem>Jace Blackwell</DropdownItem>
        </DropdownMenu>
        <DropdownToggle caret>
          Missionaries
        </DropdownToggle>
        <DropdownMenu style={{ padding: "unset" }}>
          <DropdownItem>Matthew Eppler</DropdownItem>
          <DropdownItem>Inguana Gruznina Talsi School</DropdownItem>
          <DropdownItem>Marcos & Maddie Souza</DropdownItem>
          <DropdownItem>Todd & Tiffany Sanders</DropdownItem>
        </DropdownMenu>
        <DropdownToggle caret>
          Military
        </DropdownToggle>
        <DropdownMenu style={{ padding: "unset" }}>
          <DropdownItem>Clayton Deaton</DropdownItem>
          <DropdownItem>Michae; Elizondo</DropdownItem>
          <DropdownItem>Cody Bingham</DropdownItem>
          <DropdownItem>Kade Streater</DropdownItem>
          <DropdownItem>Gage Streater</DropdownItem>
          <DropdownItem>Riley Gardner</DropdownItem>
          <DropdownItem>David Wright</DropdownItem>
          <DropdownItem>Hunter Murray</DropdownItem>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default ConnectRequests;
