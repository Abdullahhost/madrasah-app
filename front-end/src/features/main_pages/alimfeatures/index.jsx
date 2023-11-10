import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import Alim_Features from "../../pages_omponent/alimfeatures"



const Alim_Features_Page = () => {
  return (
    <div>
       <AppBar />
        <SubMenu dataprops='Features' />
        <Alim_Features />
        <Footer />
    </div>
  )
}

export default Alim_Features_Page
