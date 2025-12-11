import global from "../Features.module.css"

function ConnectUs() {
  return (
    <div>
      <h3 className={ global.heading }>
        Contact Us
      </h3>
      <div className={ global.body }>
        <p>Email: loveladybaptchurch@gmail.com</p>
        <p>Contact: Pastor Coy Howry (580) 399-6393</p>
      </div>
    </div>
  )
}

export default ConnectUs;
