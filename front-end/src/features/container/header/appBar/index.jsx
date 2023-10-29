

import { useState } from 'react';
import {  Button, Grid } from '@mui/material';
import { Search,MenuOpen,CancelPresentation } from '@mui/icons-material';
import BottomMenu from '../../../components/menuBottom';

import logo from '../../../../../public/images/logo.png'


import './index.css';
import ResponsiveMenuBar from './responsiveMenu';
import TopMenu from '../../../components/topMenu';
// import useFetch from '../../../../settings/hooks';
const AppBar = () => {
const [toggleBtn, setToggleBtn] = useState(false);

// const {data} = useFetch('http://localhost:5001/user');


  return (
    <div>
      <Grid className='menu_wrapper_container' width={'min(100% - 3rem, 155ch)'} m={'0 auto'} alignItems={'center'} p={2} container direction={'row'} justifyContent={'space-between'}>
        <Grid item>
          <Grid className='logo_section' container alignItems={'center'} sx={{flexWrap: 'wrap-reverse'}} gap={1}>
            <img src={logo} alt="images" className="logo" />
            <div>
            <h3 className='stylist'>Shahdhari Para</h3>
            <h5 className='stylist'>K.A.S</h5>
            <h6 className='stylist'>Alim Madrahsah</h6>
            </div>
          </Grid>
        </Grid>
        <nav>
        <Grid item>
         <div className='top_menu_container'>
          <Grid item>
            <div >
            <div className='top_menu_wrapper' >
              <div className='top_menu_Link_container'>
                <TopMenu />
              </div>       


            <Grid position={'relative'} className='searchBar_section' item>
              <input className='searchBar' type="search" placeholder='Search...' name="search" id="search" />
              <Search className='searchIcon'/>
            </Grid>
            </div>
            </div>
          </Grid>
          <Grid item className='menu_bottom_section' >
            <BottomMenu />
          </Grid>
           <div  className='menu_bottom_section_toggle' >
            <Button size='small' variant='contained' sx={{ background: '#414040' }}  onClick={() => setToggleBtn(!toggleBtn)}>
            {toggleBtn ? <CancelPresentation /> : <MenuOpen />}
           </Button>
            </div>
         </div>
        </Grid>
        </nav>
      </Grid>
     
        <div style={toggleBtn ?
           {transition: 'all ease-in-out .3s', transform: 'translateY(0px)'} 
            :
           {position: 'absolute', top: '-100%', left: '0', width: '100%', transform: "translateY(-100%)", transition: 'all ease-in-out .3s'}} >
            <ResponsiveMenuBar />
        </div>
   
    </div>
  )
}
 
export default AppBar
