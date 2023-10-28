

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const DeleteTeacher = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {_id} = location.state;

    const handleDeleteTeacher = async (e) => {
        try{
             const res = await axios.delete(`https://madrasah-app.onrender.com/teacher/${e}`)
     alert(res.data)
            navigate('/teacherpannel')
     
    }catch(err){
        console.log(err.response.data)
    }
}
handleDeleteTeacher(_id)

}

export default DeleteTeacher


