


import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import './index.css'
import { useState } from 'react'





const TeacherCreate = () => {

  const navigate = useNavigate();


  const [profilePic, setProfilePic] = useState(undefined)
  const [teacherData, setTeacherData] = useState({
    teacherName: undefined,
    designation: undefined,
    depertment: undefined,
    educationQualification: undefined,
    mobileNumber: undefined,
    emailAddress: undefined,
    profile: undefined
  })


  const handleChange = (e) => {
    setTeacherData((prev) => ({ ...prev, [e.target.name]: e.target.value, profile: profilePic }))
  }

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0])

  }

  const formData = new FormData();
  formData.append("teacherName", teacherData.teacherName);
  formData.append("designation", teacherData.designation);
  formData.append("depertment", teacherData.depertment);
  formData.append("educationQualification", teacherData.educationQualification);
  formData.append("mobileNumber", teacherData.mobileNumber);
  formData.append("emailAddress", teacherData.emailAddress);
  formData.append("profile", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/teacher/create', formData, { withCredentials: true });
      navigate('/teacherpannel')
    } catch (err) {
      console.log(err.response.data)
    }
  }
  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data' className="create_teacher">
      <div className="image_section">
        <img className='teacher_profile' src={profilePic ? URL.createObjectURL(profilePic) : 'avater.webp'} alt="profileImage" />
      </div>
      <div className="create_section_left">

        <div className='profile_uploader'>
          <label className='profiler_uploader_icon'><DriveFolderUploadOutlined /></label>
          <input type="file" name='profile' required onChange={handleFileChange} />
        </div>

        <p>Teasher Name</p>
        <input required type="text" name='teacherName' onChange={handleChange} placeholder="Teacher name here" />

        <p>Designation</p>
        <input required type="text" name='designation' onChange={handleChange} placeholder="Designation here" />

        <p>Depertment</p>
        <input required type="text" name='depertment' onChange={handleChange} placeholder=" Depertment here" />

      </div>

      <div className="create_section_right">

        <p>Educational Qualification</p>
        <input required type="text" name='educationQualification' onChange={handleChange} placeholder="Qualification here" />

        <p>Phone Number</p>
        <input required type="text" name='mobileNumber' onChange={handleChange} placeholder="Phone Number here" />

        <p>Email Address</p>
        <input required type="email" name='emailAddress' onChange={handleChange} placeholder="Emaile here" />

        <input className='submit_btn' type='submit' value={'Create Teacher'} />

      </div>
    </form>
  )
}

export default TeacherCreate
