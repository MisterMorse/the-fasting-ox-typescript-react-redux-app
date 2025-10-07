import congregation from '../../assets/images/congregation.jpg'
function AboutBelieve() {
  return (
    <div>
      <h3 style={{ padding: "25px", color: "#E05C42" }}>
        What We Believe
      </h3>
      <div style={{ textAlign: "start" }}>
        We believe that Jesus is Lord and Savior, and that the Bible is the divinely inspired Word of God that serves as the final written authority for the living out of the Christian faith.
      </div>
      <img src={congregation} alt="congregation" style={{ width: "100%", height: "auto", marginTop: "25px" }} />
    </div>
  )
}

export default AboutBelieve;
