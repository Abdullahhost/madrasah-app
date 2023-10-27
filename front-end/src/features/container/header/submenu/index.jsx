

import './index.css'
import { useNavigate } from 'react-router-dom'

const SubMenu = (props) => {
  
// eslint-disable-next-line react/prop-types
const subMenu =  props.dataprops
    const navigate =  useNavigate();
  return (
    <>
      <div className="submenu_container">
        <div className="submenu_top">
           <button className='disable_color_btn' onClick={() => navigate('/')}>Home &nbsp;</button>
           <small>/{subMenu}</small>
        </div>

        <div className="submenu_bottom">
            <h2>{subMenu}</h2>
        </div>

      </div>
    </>
  )
}

export default SubMenu
