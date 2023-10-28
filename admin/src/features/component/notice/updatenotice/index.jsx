


import axios from 'axios'

import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const NoticeUpdate = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { _id, noticeTitle, noticeDetails } = location.state

    const [teacherData, setTeacherData] = useState({
        noticeTitle,
        noticeDetails
    })


    const handleChange = (e) => {
        setTeacherData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const updateformData = new FormData();
    updateformData.append("noticeTitle", teacherData.noticeTitle);
    updateformData.append("noticeDetails", teacherData.noticeDetails);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://madrasah-app.onrender.com/notice/${_id}`, teacherData, { withCredentials: true });
            navigate('/noticepannel')
        } catch (err) {
            console.log(err.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className="create_teacher">

            <div className="create_section_left">

                <p>Title</p>
                <input type="text" name='noticeTitle' onChange={handleChange} value={teacherData.noticeTitle ? teacherData.noticeTitle : noticeTitle} />

                <p>Details</p>
         
                <textarea cols={90} rows={18}  name='noticeDetails' onChange={handleChange} value={teacherData.noticeDetails ? teacherData.noticeDetails : noticeDetails}  style={{ padding: '1rem', fontSize: '.9rem', fontFamily: 'sans-serif', textAlign: 'justify' }} ></textarea> 
                <div className="create_section_left">
                    <input className='submit_btn' type='submit' value={'Update Notice'} />
                </div>
            </div>

        </form>
    )
}

export default NoticeUpdate
