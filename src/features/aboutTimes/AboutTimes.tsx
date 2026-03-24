import global from "../Features.module.css"

import bw from "../../assets/images/churchBW.jpg"

function AboutTimes() {
  return (
    <div>
      <h3 className={ global.heading }>Service Times</h3>
      <div className={ global.body }>
        <p style={{ fontWeight: "bold" }}>Location</p>
        <p>20981 County Road 1560, Ada, OK 74821-20981</p>
        <p style={{ fontWeight: "bold" }}>Sunday Morning</p>
        <p>
          10:00 AM - Sunday School
          <br />
          11:00 AM - Sunday Morning Worship (children's church and nursery
          available)
          <br />
        </p>
        <p style={{ fontWeight: "bold" }}>Wednesday Evening</p>
        <p>6:30 PM - Youth Services</p>
        <img
          src={ bw }
          style={{ marginTop: "20px", width: "100%", height: "auto" }}
          alt=""
        />
      </div>
    </div>
  )
}

export default AboutTimes;
