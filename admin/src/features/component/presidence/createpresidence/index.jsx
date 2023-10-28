


import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'





const PresidentCreate = () => {

  const navigate = useNavigate();


  const [profilePic, setProfilePic] = useState(undefined)
  const [teacherData, setTeacherData] = useState({
    presidenceName: undefined,
    designation: undefined,
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
  formData.append("presidenceName", teacherData.presidenceName);
  formData.append("designation", teacherData.designation);
  formData.append("educationQualification", teacherData.educationQualification);
  formData.append("mobileNumber", teacherData.mobileNumber);
  formData.append("emailAddress", teacherData.emailAddress);
  formData.append("profile", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://madrasah-app.onrender.com/presidence/create', formData, { withCredentials: true });
      navigate('/presidentpannel')
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

        <p>President Name</p>
        <input required type="text" name='presidenceName' onChange={handleChange} placeholder="Presidence name here" />

        <p>Designation</p>
        <input required type="text" name='designation' onChange={handleChange} placeholder="Designation here" />
      

        <p>Educational Qualification</p>
        <input required type="text" name='educationQualification' onChange={handleChange} placeholder="Qualification here" />


      </div>

      <div className="create_section_right">

      
        <p>Phone Number</p>
        <input required type="text" name='mobileNumber' onChange={handleChange} placeholder="Phone Number here" />

        <p>Email Address</p>
        <input required type="email" name='emailAddress' onChange={handleChange} placeholder="Emaile here" />

        <input className='submit_btn' type='submit' value={'Create President'} />

      </div>
    </form>
  )
}

export default PresidentCreate
