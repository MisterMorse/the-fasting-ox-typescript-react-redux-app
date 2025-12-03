import bw from "../../assets/images/churchBW.jpg"
function AboutTimes() {
  return (
    <div>
      <h3 style={{ padding: "25px", color: "#E05C42"  }}>Service Times</h3>
      20981 County Road, Ada, OK 74821-20981
      <div style={{ textAlign: "start", marginTop: "20px" }}>
        <p style={{ fontWeight: "bold" }}>Sunday Morning</p>
        <p>10:00 AM - Sunday School</p>
        <p>
          11:00 AM - Sunday Morning Worship (children's church and nursery
          available)
        </p>
        <p style={{ fontWeight: "bold" }}>Wednesday Evening</p>
        <p>6:30 PM - Youth Services</p>
      </div>
      <img src={bw} style={{marginTop: "20px", width: "100%", height: "auto"}} alt="" />
    </div>
  )
}

export default AboutTimes;
