import FooterDesktop from "../footerDesktop/FooterDesktop.tsx"
import FooterMobile from "../footerMobile/FooterMobile.tsx"

function FooterResponsive() {
  return window.innerWidth > 768 ? <FooterDesktop/> : <FooterMobile/>
}

export default FooterResponsive;
