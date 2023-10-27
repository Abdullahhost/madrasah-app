import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import Worker from "../../pages_omponent/worker"




const Worker_page = () => {
  return (
    <div>
      <AppBar />
      <SubMenu dataprops='About Us'/>
      <Worker />
      <Footer />
    </div>
  )
}

export default Worker_page
