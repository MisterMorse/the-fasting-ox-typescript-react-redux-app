import global from "../Features.module.css"

import congregation from "../../assets/images/congregation.jpg"

function AboutBelieve() {
  return (
    <div>
      <h3 className={ global.heading }>
        What We Believe
      </h3>
      <div className={ global.body }>
        We believe that Jesus is Lord and Savior, and that the Bible is the divinely inspired Word of God that serves as the final written authority for the living out of the Christian faith.
        <img src={ congregation } alt="congregation" style={{ width: "100%", height: "auto", marginTop: "25px" }} />
      </div>
    </div>
  )
}

export default AboutBelieve;
