
import Footer from "../../container/footer"
import AppBar from "../../container/header/appBar"
import SubMenu from "../../container/header/submenu"
import NoticeDetails from "../../pages_omponent/noticeDetails"



const NoticePage = () => {
  return (
    <div>
        <AppBar />
        <SubMenu dataprops='Notice' />
        <NoticeDetails /> 
        <Footer />
    </div>
  )
}

export default NoticePage
