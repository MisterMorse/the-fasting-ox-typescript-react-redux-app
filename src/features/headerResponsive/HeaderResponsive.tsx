import HeaderDesktop from "../headerDesktop/HeaderDesktop.tsx"
import HeaderMobile from "../headerMobile/HeaderMobile.tsx"

function HeaderResponsive() {
  return window.innerWidth > 768 ? <HeaderDesktop/> : <HeaderMobile/>
}

export default HeaderResponsive;
