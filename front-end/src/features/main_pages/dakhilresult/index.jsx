
import Footer from '../../container/footer'
import AppBar from '../../container/header/appBar'
import SubMenu from '../../container/header/submenu'

import DakhilResult from '../../pages_omponent/allresult/DakhilResult'

const DakhilResult_Page = () => {
  return (
    <div>
      <AppBar />
      <SubMenu dataprops='Result' />
      <DakhilResult />
      <Footer />
    </div>
  )
}

export default DakhilResult_Page
