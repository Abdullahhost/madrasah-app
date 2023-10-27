


import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const DeleteSecretory = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {_id} = location.state;

    const handleDeleteTeacher = async (e) => {
        try{
             const res = await axios.delete(`http://127.0.0.1:5001/secretory/${e}`)
     alert(res.data)
            navigate('/secretorypannel')
     
    }catch(err){
        console.log(err.response.data)
    }
}
handleDeleteTeacher(_id)

}

export default DeleteSecretory


