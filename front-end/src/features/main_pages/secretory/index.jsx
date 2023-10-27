import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import Secretory from "../../pages_omponent/secretory"




const Secretory_page = () => {
  return (
    <div>
      <AppBar />
      <SubMenu dataprops='About Us' />
      <Secretory />
      <Footer />
    </div>
  )
}

export default Secretory_page
