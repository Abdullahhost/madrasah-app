


import Footer from '../../container/footer'
import AppBar from '../../container/header/appBar'
import SubMenu from '../../container/header/submenu'
import Student from '../../pages_omponent/student'
const Student_page = () => {
  return (
    <div>
      <AppBar />
      <SubMenu  dataprops='Student' />
      <Student />
      <Footer />
    </div>
  )
}

export default Student_page
