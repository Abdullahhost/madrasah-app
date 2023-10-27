

import { Navigate } from 'react-router-dom'
import NoticePage from '../../features/main_pages/noticedetails';

// eslint-disable-next-line react/prop-types
const Protected = ({getDataInformation}) => {
  
    if(!getDataInformation) { 
        
        {alert("Before Login or Signup you can View Notice Page. 🧧")}
        return  <Navigate to={'/signup'} replace />
    }
    
    return <NoticePage /> 
}

export default Protected
