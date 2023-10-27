


import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'





const LoveOfPeopleCreate = () => {

  const navigate = useNavigate();


  const [profilePic, setProfilePic] = useState(undefined)
  const [teacherData, setTeacherData] = useState({
    peopleName: undefined,
    peopleAddress: undefined,
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
  formData.append("peopleName", teacherData.peopleName);
  formData.append("peopleAddress", teacherData.peopleAddress);
  formData.append("mobileNumber", teacherData.mobileNumber);
  formData.append("emailAddress", teacherData.emailAddress);
  formData.append("profile", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/loveofpeople/create', formData, { withCredentials: true });
      navigate('/loveofpeoplepannel')
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

        <p>People Name</p>
        <input required type="text" name='peopleName' onChange={handleChange} placeholder="People name here" />
      

        <p>Address</p>
        <input required type="text" name='peopleAddress' onChange={handleChange} placeholder="Address here" />


      </div>

      <div className="create_section_right">

      
        <p>Phone Number</p>
        <input required type="text" name='mobileNumber' onChange={handleChange} placeholder="Phone Number here" />

        <p>Email Address</p>
        <input required type="email" name='emailAddress' onChange={handleChange} placeholder="Emaile here" />

        <input className='submit_btn' type='submit' value={'Create Love of People'} />

      </div>
    </form>
  )
}

export default LoveOfPeopleCreate
