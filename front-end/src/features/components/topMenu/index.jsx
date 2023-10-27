

import { Stack,Box } from '@mui/material';
import {ChevronRight, AddIcCall  } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
  return (
    <>
        <Stack className='top_menu_section' direction={'row'} spacing={5}>
              <Box className="menu_top" display={'flex'} padding={'.2rem'} alignItems={'center'} justifyContent={'space-between'} gap={'.4rem'}>
                <ChevronRight className='setColor' />
                <li><a className='menu_top_item' href="#contuctus">Contuct Us</a></li>
              </Box>
              <Box className="menu_top" display={'flex'} padding={'.2rem'} alignItems={'center'} justifyContent={'space-between'} gap={'.4rem'}>
                <ChevronRight className='setColor' />
                <li><NavLink className='menu_top_item' to={'/chat'} >Chat</NavLink></li>
              </Box>
              <Box className="menu_top" display={'flex'} padding={'.2rem'} alignItems={'center'} justifyContent={'space-between'} gap={'.4rem'}>
                <AddIcCall className='setColor' />
                <li><a className='menu_top_item' href="tel:+8801759100701">0175..</a></li>
              </Box>
            </Stack>
    </>
  )
}

export default TopMenu
