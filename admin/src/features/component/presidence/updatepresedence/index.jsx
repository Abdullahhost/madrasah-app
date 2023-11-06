


import axios from 'axios'

import { useNavigate, useLocation } from 'react-router-dom'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'





const PresidentUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const {_id, presidenceName, designation, emailAddress, mobileNumber, educationQualification} = location.state

  const profile =  location.state?.profile

  const [profilePic, setProfilePic] = useState(undefined)
  const [teacherData, setTeacherData] = useState({
    teacherName: presidenceName,
    designation: designation,
    educationQualification: educationQualification,
    mobileNumber: mobileNumber,
    emailAddress: emailAddress,
    profile: undefined
  })


  const handleChange = (e) => {
    setTeacherData((prev) => ({ ...prev, [e.target.name]: e.target.value, profile: profilePic ? profilePic: profile  }))
  }

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0])

  }

  const updateformData = new FormData();
  updateformData.append("presidenceName", teacherData.teacherName);
  updateformData.append("designation", teacherData.designation);
  updateformData.append("educationQualification", teacherData.educationQualification);
  updateformData.append("mobileNumber", teacherData.mobileNumber);
  updateformData.append("emailAddress", teacherData.emailAddress);
  updateformData.append("profile", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://madrasah-app.onrender.com/presidence/${_id}`, updateformData, { withCredentials: true });
      navigate('/presidentpannel')
    } catch (err) {
      console.log(err.response.data)
    }
  }
  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data' className="create_teacher">
      <div className="image_section">
        <img className='teacher_profile' src={profilePic ? URL.createObjectURL(profilePic) : profile } alt="profileImage" />
      </div>
      <div className="create_section_left">

        <div className='profile_uploader'>
          <label className='profiler_uploader_icon'><DriveFolderUploadOutlined /></label>
          <input type="file" name='profile' onChange={handleFileChange} />
        </div>

        <p>Teasher Name</p>
        <input type="text" name='presidenceName' onChange={handleChange} value={teacherData.teacherName ? teacherData.teacherName : presidenceName} />

        <p>Designation</p>
        <input type="text" name='designation' onChange={handleChange} value={teacherData.designation ? teacherData.designation : designation} />
    
        <p>Educational Qualification</p>
        <input type="text" name='educationQualification' onChange={handleChange} value={teacherData.educationQualification ? teacherData.educationQualification : educationQualification} />

      </div>

      <div className="create_section_right">


        <p>Phone Number</p>
        <input type="number" name='mobileNumber' onChange={handleChange} value={teacherData.mobileNumber ? teacherData.mobileNumber : mobileNumber} />

        <p>Email Address</p>
        <input type="email" name='emailAddress' onChange={handleChange} value={teacherData.emailAddress ? teacherData.emailAddress : emailAddress} />

        <input className='submit_btn' type='submit' value={'Update President'} />

      </div>
    </form>
  )
}

export default PresidentUpdate
