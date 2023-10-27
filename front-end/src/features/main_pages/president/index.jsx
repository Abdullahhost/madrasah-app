import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import President from "../../pages_omponent/president"




const President_page = () => {
  return (
    <div>
      <AppBar />
      <SubMenu dataprops="About Us"/>
      <President />
      <Footer />
    </div>
  )
}

export default President_page
