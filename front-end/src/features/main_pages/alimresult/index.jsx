import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import AlimResult from "../../pages_omponent/allresult/alimresult"



const Alim_Result_page = () => {
  return (
    <div>
      <AppBar />
       <SubMenu dataprops='Result' />
      <AlimResult />
      <Footer />
    </div>
  )
}

export default Alim_Result_page
