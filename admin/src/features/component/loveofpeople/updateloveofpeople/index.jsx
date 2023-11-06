






import axios from 'axios'

import { useNavigate, useLocation } from 'react-router-dom'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'





const LoveOfPeopleUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const {_id, peopleName, designation, emailAddress, mobileNumber, peopleAddress} = location.state

  const profile =  location.state?.profile


  const [profilePic, setProfilePic] = useState(undefined)
  const [teacherData, setTeacherData] = useState({
    teacherName: peopleName,
    designation: designation,
    peopleAddress: peopleAddress,
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
  updateformData.append("peopleName", teacherData.peopleName);
  updateformData.append("designation", teacherData.designation);
  updateformData.append("peopleAddress", teacherData.peopleAddress);
  updateformData.append("mobileNumber", teacherData.mobileNumber);
  updateformData.append("emailAddress", teacherData.emailAddress);
  updateformData.append("profile", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://madrasah-app.onrender.com/loveofpeople/${_id}`, updateformData, { withCredentials: true });
      navigate('/loveofpeoplepannel')
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

        <p>People Name</p>
        <input type="text" name='peopleName' onChange={handleChange} value={teacherData.peopleName ? teacherData.peopleName : peopleName} />

        <p>Address</p>
        <input type="text" name='peopleAddress' onChange={handleChange} value={teacherData.peopleAddress ? teacherData.peopleAddress : peopleAddress} />

      </div>

      <div className="create_section_right">


        <p>Phone Number</p>
        <input type="number" name='mobileNumber' onChange={handleChange} value={teacherData.mobileNumber ? teacherData.mobileNumber : mobileNumber} />

        <p>Email Address</p>
        <input type="email" name='emailAddress' onChange={handleChange} value={teacherData.emailAddress ? teacherData.emailAddress : emailAddress} />

        <input className='submit_btn' type='submit' value={'Update People'} />

      </div>
    </form>
  )
}

export default LoveOfPeopleUpdate
