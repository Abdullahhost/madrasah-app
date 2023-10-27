


import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'





const NoticeCreate = () => {

  const navigate = useNavigate();



  const [teacherData, setTeacherData] = useState({
    noticeTitle: undefined,
    noticeDetails: undefined,
  })


  const handleChange = (e) => {
    setTeacherData((prev) => ({ ...prev, [e.target.name]: e.target.value}))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/notice/create', teacherData, { withCredentials: true });
      navigate('/noticepannel')
    } catch (err) {
      console.log(err.response.data)
    }
  }
  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data' className="create_teacher">

      <div className="create_section_left">


        <p>Title</p>
        <input required type="text" name='noticeTitle' onChange={handleChange} placeholder="Notice here" />

        <p>Details</p>
        <textarea cols={90} rows={18}  name='noticeDetails' onChange={handleChange} style={{ padding: '1rem', fontSize: '.9rem', fontFamily: 'sans-serif', textAlign: 'justify' }} ></textarea> 
                
        <div className="create_section_left">
            <input className='submit_btn' type='submit' value={'Create Notice'} />
        </div>
      </div>
    </form>
  )
}

export default NoticeCreate
