import staffAngie from "../../assets/images/staffAngie.jpg"
import staffBeverly from "../../assets/images/staffBeverly.jpg"
import staffCoy from "../../assets/images/staffCoy.jpg"
import staffTyler from "../../assets/images/staffTyler.jpg"

// @ts-ignore
function StaffPic({ pic }) {
  return (
    <img src={ pic } style={{ width: "15%", objectFit: "contain", padding: "10px", marginBottom: "auto" }} alt={ "" }/>
  )
}

// @ts-ignore
function StaffMemberLeft({ name, bio, pic }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "10px", padding: "10px 20px" }}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/restrict-template-expressions */}
      <StaffPic pic={ `url(${ pic })` } />
      <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
        <div style={{ margin: "inherit", textAlign: "left", fontWeight: "bold" }}>
          { name }
        </div>
        <div style={{ margin: "inherit", textAlign: "left" }}>
          { bio }
        </div>
      </div>
    </div>
  )
}

// @ts-ignore
function StaffMemberRight({ name, bio, pic }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", margin: "10px", padding: "10px 20px" }}>
      <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
        <div style={{ margin: "inherit", textAlign: "left", fontWeight: "bold" }}>
          { name }
        </div>
        <div style={{ margin: "inherit", textAlign: "left" }}>
          { bio }
        </div>
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/restrict-template-expressions */}
      <StaffPic pic={ `url(${ pic })` } />
    </div>
  )
}

function AboutLeadership() {
  return (
    <div>
      <StaffMemberLeft
        name={"Coy Howry"}
        bio={"I have been a member of Lovelady Baptist Church for over 40 years, serving as pastor for the past 10 years; I am a life-long Okie, and I graduated from Allen High School and East Central University. I was raised the son of a Southern Baptist pastor, and my father served as the pastor at our church from 1980 to 1997. I became a member of Lovelady in 1982, and – after having attended Lovelady for over 30 years – I surrendered to ministry in 2013. After serving as a pulpit supply and interim pastor in area churches for two years, I was called as pastor at Lovelady. My wife Patty and I were married at Lovelady in 1984, and we have three adult children and nine grandchildren. I love spending time with my family, as well as hunting, fishing, camping, cooking, watching sports, and gardening."}
        pic={"staffCoy.jpg"}
      />
      <StaffMemberRight
        name={"Beverly Ballagh"}
        bio={"Born and raised in northwestern Arkansas, I graduated from Alma High School in 1976; I began taking piano lessons when I was eight years old and continued them throughout my high school years, being forced to play in piano contests and recitals (I did not enjoy those at all). After high school graduation, I attended a junior college in Fort Smith, continuing to take piano lessons and sing in the choir. From there, I transferred to Oklahoma Baptist University in Shawnee, where I continued my piano and vocal studies; I graduated in 1980 with a bachelor’s degree in music education, with a choral emphasis. Upon graduation, I had a job awaiting me at Vanoss School as a music teacher for grades 1-12; this is where I met my husband. We have been married for 43 years and have three children and seven grandchildren. I worked some odd jobs while staying home raising our children but have always been a church accompanist wherever I attended, beginning at age 14. I also worked in the Ada school system as an accompaniment to the junior and senior high choirs, as well as performing arts for 10 years. I became music director at Lovelady about six years ago, initially until another music director could be found. It is such a blessing leading the music here at Lovelady. The congregation is so wonderful and supportive, and I have some of the best musicians working with me – including our amazing, talented church members that sing or play specials for our service."}
        pic={"staffBeverly.jpg"}
      />
      <StaffMemberLeft
        name={"Angie Smith"}
        bio={"I am married to Duane Smith, with whom I have two children: Trace and Kylee; I graduated from Byng High School and East Central University, and I have attended Lovelady nearly all my life. I began keeping the nursery when I was 12 and continued to be involved with the children’s ministry – teaching children’s church, working at VBS, and directing children’s Christmas programs. Then, in 2000, the opportunity came to accept the children's minister position. The position covers children’s church each Sunday morning and children’s class on Wednesday nights; additionally, I help with activities throughout the year, like Vacation Bible School and Falls Creek Children’s Camp. I even correspond with children for their birthdays, attend their activities, and visit when they are sick or in hospital."}
        pic={"staffAngie.jpg"}
      />
      <StaffMemberRight
        name={"Tyler Ware"}
        bio={"I was born and raised in Ada, OK; I am a graduate of Byng Public School and am currently attending East Central University, majoring in history with a minor in education. I got my start in youth ministry after being called while working on a college campus."}
        pic={"staffTyler.jpg"}
      />
    </div>
  )
}

export default AboutLeadership;
