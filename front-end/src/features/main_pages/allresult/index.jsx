
import Footer from '../../container/footer'
import AppBar from '../../container/header/appBar'
import SubMenu from '../../container/header/submenu'
import EbtedayeeResult from '../../pages_omponent/allresult'

const EbtedayeeResult_page = () => {
  return (
    <div>
      <AppBar />
       <SubMenu dataprops='Result' />
      <EbtedayeeResult />
      <Footer />
    </div>
  )
}

export default EbtedayeeResult_page
