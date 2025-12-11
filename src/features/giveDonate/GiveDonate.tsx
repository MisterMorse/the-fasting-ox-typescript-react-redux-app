import global from "../Features.module.css"

function GiveDonate() {
  return (
    <div>
      <h3 className={ global.heading }>
        Donate
      </h3>
      <div className={ global.body }>
        <div style={{ margin: "inherit", textAlign: "left" }}>
          <p>By contributing to what Lovelady is doing in our community and around the world, we are using
            what God has given us to share the good news of Jesus by serving others.</p>
          <p>Tithing should be seen as an expression of Christian Grace.</p>
          <p>You may mail donations to:</p><p>Lovelady Baptist Church</p>
          <p>P. O. Box 1699</p><p>Ada, OK 74821-1699</p>
        </div>
      </div>
    </div>
  )
}

export default GiveDonate;
