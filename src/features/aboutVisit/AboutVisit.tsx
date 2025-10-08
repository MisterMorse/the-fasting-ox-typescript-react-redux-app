import pair from "../../assets/images/pair.jpg"

function AboutVisit() {
  return (
    <div>
      <h3 style={{ padding: "25px", color: "#E05C42" }}>
        Planning Your Visit
      </h3>
      <div style={{ textAlign: "start" }}>
        <img src={pair  } style={{ float: "left",  marginRight: "15px", marginBottom:"15px", width: "30%", height: "auto"  }}/>
        We know that meeting someone for the first time can be intimidating, and going to a new church for the first time can be nerve-wracking. We want to help make your first experience at Lovelady Baptist a great one!
        <div style={{ marginTop: "25px"}}>
          <p style={{ fontWeight: "bold" }}>What time is the main service?</p>
          <p>Sunday at 11:00AM</p>
          <p style={{ fontWeight: "bold" }}>How long is a service at Lovelady Baptist?</p>
          <p>In total, a service is about 70 minutes in length. Our worship service begins at 11:00AM; song lyrics are projected on the screen so you can sing along and/or engage with worship however you feel most comfortable. After the music portion of service is complete, our pastor will share an encouraging and hope-filled message about Jesus!</p>
          <p style={{ fontWeight: "bold" }}>What's the culture like at Lovelady Baptist?</p>
          <p>Sundays at Lovelady Baptist are exciting, casual, and relaxed. Come as you are, and expect to feel as our guest.</p>
          <p style={{ fontWeight: "bold" }}>What about my kids?</p>
          <p>We believe that kids should have a blast at church every single week, and we make this a priority. At Lovelady Baptist, the children from age three through grade six will go to children's church after our morning songs; nursery workers are also available for infants. Your children's safely is a top priority, and everyone who works with the children has passed a background check.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutVisit;
