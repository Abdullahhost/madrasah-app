
import { Button } from "@mui/material"
import './index.css';
import TopMenu from "../../../../components/topMenu";
import { Link, NavLink } from "react-router-dom";
import useFetch from "../../../../../settings/hooks"; 
const ResponsiveMenuBar = () => {
  const {data} = useFetch('http://localhost:5001/notice');
  return (
    <div>
       <div className="menu_responsive_section">
              <ul className=''>
                <li><NavLink to="/" tabIndex={1} >Home</NavLink></li>
                  <div className='menu_bottom_sub'>
                      <li className='responsive_menu_btn'>
                      <span tabIndex={1}>About</span>
                    </li>
                    <div className='menu_responsive_sub_menu'>
                        <ul>
                          <li><NavLink to="/teacher" tabIndex={1}>Teacher</NavLink></li>
                          <li><NavLink to="/president" tabIndex={1}>President</NavLink></li>
                          <li><NavLink to="/secretary" tabIndex={1}>Secretary</NavLink></li>
                          <li><NavLink to="/worker" tabIndex={1}>Worker</NavLink></li>
                          <li><NavLink to="/supporter" tabIndex={1}>Supporter</NavLink></li>
                          <li><NavLink to="/loveofpeople" tabIndex={1}>Love Of People</NavLink></li>
                         </ul>
                    </div>
                  </div>
                  <div className='menu_bottom_sub'>
                      <li className='responsive_menu_btn'>
                      <span tabIndex={1}>Notice</span>
                    </li>
                    <div className='menu_responsive_sub_menu'>
                      <ul>
                      {data?.map((item) => {
              
              const { _id, noticeTitle, noticeDetails } = item
                return <li key={_id}><Link tabIndex={1} to={ `/notice/${noticeTitle.toLowerCase()}`} state={{noticeTitle, noticeDetails}} >{noticeTitle}</Link></li>
             })}
                      </ul>
                    </div>
                  </div>
                  <li><NavLink to={'/student'} tabIndex={1} >Students</NavLink></li>
                <div className='menu_bottom_sub'>
                    <li className='responsive_menu_btn'>
                      <span tabIndex={1}>Result</span>
                    </li>
                    <div className='menu_responsive_sub_menu'>
                      <li><NavLink to={'/onetofour'} tabIndex={1} >class 1-4</NavLink></li>
                      <li><NavLink to={'/fivetoeight'} tabIndex={1} >class 5-8 </NavLink></li>
                      <li><NavLink to={'/dakhilresult'} tabIndex={1} >Dhakil</NavLink></li>
                      <li><NavLink to={'/alimresult'} tabIndex={1} >Alim</NavLink></li>
                    </div>
                  </div>
                <div className='menu_bottom_sub'>
                    <li className='responsive_menu_btn'>
                      <span tabIndex={1}>Features</span>
                    </li>
                    <div className='menu_responsive_sub_menu'>
                      <li><NavLink to={'/alimsector'} tabIndex={1} >Alim Sector</NavLink></li>
                      <li><NavLink to={'/dakhil'} tabIndex={1} > Dhakhil</NavLink></li>
                      <li><NavLink to={'/jdc'} tabIndex={1} >JDC</NavLink></li>
                      <li><NavLink to={'/ebtedaye'} tabIndex={1} >Ebtedaye</NavLink></li>
                    </div>
                  </div>
              </ul>
            <div className="menu_responsive_link_section">
                <TopMenu />
            </div>

              <div className="btn_group_section">

                <div className="btn_group">
                  <Button variant='outlined' color='success' size='small'>
                    Login
                  </Button>
                  <Button className="signUpBtn" variant='contained' sx={{background: '#212121'}} >
                    Sign Up
                  </Button>
                </div>

              </div>
       </div>
    </div>
  )
}

export default ResponsiveMenuBar
