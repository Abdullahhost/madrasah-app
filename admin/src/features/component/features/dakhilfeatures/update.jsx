




import axios from 'axios'

import { useNavigate, useLocation } from 'react-router-dom'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'



const DakhilUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const {_id, established, numberOfTeacher, description} = location.state


  const profileImage =  location.state?.profile

  const [profilePic, setProfilePic] = useState(undefined)
  const [featuresData, setFeaturesData] = useState({
    established: established,
    numberOfTeacher: numberOfTeacher,
    description: description,
    profile: undefined
  })


  const handleChange = (e) => {
    setFeaturesData((prev) => ({ ...prev, [e.target.name]: e.target.value, profile: profilePic ? profilePic: profileImage  }))
  }

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0])

  }

  const updateformData = new FormData();
  updateformData.append("established", featuresData.established);
  updateformData.append("numberOfTeacher", featuresData.numberOfTeacher);
  updateformData.append("description", featuresData.description);
  updateformData.append("profile", profilePic);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://madrasah-app.onrender.com/alimfeatures/${_id}`, updateformData, { withCredentials: true });
      navigate(-1)
    } catch (err) {
      console.log(err.response.data)
    }
  }
  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data' className="create_teacher">
      <div className="image_section">
        <img className='teacher_profile' src={profilePic ? URL.createObjectURL(profilePic) : profileImage } alt="profileImage" />
      </div>
      <div className="create_section_left">

        <div className='profile_uploader'>
          <label className='profiler_uploader_icon'><DriveFolderUploadOutlined /></label>
          <input type="file" name='profile' onChange={handleFileChange} />
        </div>

        <p>Established</p>
        <input type="text" name='established' onChange={handleChange} value={featuresData.established ? featuresData.established : established} />

        <p>Number Of Teacher</p>
        <input type="number" name='numberOfTeacher' onChange={handleChange} value={featuresData.numberOfTeacher ? featuresData.numberOfTeacher : numberOfTeacher} />

      </div>

      <div className="create_section_right">

      <textarea cols={40} rows={13}  name='description' onChange={handleChange} value={featuresData.description ? featuresData.description : description}  style={{ padding: '1rem', fontSize: '.9rem', fontFamily: 'sans-serif', textAlign: 'justify' }} ></textarea> 
                
        <input className='submit_btn' type='submit' value={'Update Features'} />

      </div>
    </form>
  )
}

export default DakhilUpdate
