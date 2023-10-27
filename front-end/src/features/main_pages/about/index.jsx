
import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import Teacher from "../../pages_omponent/teacher"



const Teacher_Page = () => {
  return (
    <div>
      <AppBar />
      <SubMenu dataprops='About Us' />
      <Teacher />
      <Footer />
    </div>
  )
}

export default Teacher_Page
