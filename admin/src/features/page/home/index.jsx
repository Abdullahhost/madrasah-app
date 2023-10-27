
import Widget from '../../component/widget'
import './index.scss'

const AdminHome = () => {
  return (
    <>
    <div className="widget_wrapper">
        <Widget type='countteacher'/>
        <Widget type='countstudent'/>
        <Widget type='countnotice'/>
        <Widget type='countloveofpeople'/>
    </div>
      
    </>
  )
}

export default AdminHome
