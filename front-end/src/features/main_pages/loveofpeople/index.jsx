import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import People from "../../pages_omponent/loveofpeople"



const LoveofPeople_Page = () => {
  return (
    <div>
      <AppBar />
      <SubMenu dataprops='Love of People' />
      <People />
      <Footer />
    </div>
  )
}

export default LoveofPeople_Page
