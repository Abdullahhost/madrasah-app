

import useFetch from '../../../settings/hooks'
import Skeleton from '../../skeloten'


import { useSelector } from 'react-redux'
import './index.css'

const Alim_Features = () => {
  
  const { data, loading } = useFetch('https://madrasah-app.onrender.com/alimfeatures/Alim')
  const lightDarkMode = useSelector((state) => state.dark.dark)


  return (
    <div>

      {loading ? <Skeleton /> : <div className="faturescontainer">

        {data?.map((ele) => {
          const { title, description, numberOfTeacher, established, profile } = ele
          return <div className="features_section_wrap" key={ele._id}>

            <div  style={lightDarkMode ? {boxShadow: "0 0 10px #fff"} : {boxShadow: '0 0 10px #000'} } className="featuresImage">
              <img src={profile} alt="featuresImage" />
              <h4 className="subcontent" style={lightDarkMode ? {color: '#f2f2f2'} : {color: "#000"}}>Loving Moments</h4>
            </div>
            <div style={lightDarkMode ? { color: "#BDC1C6"} : { color: "#000" }}  className="features_content_box">

              <h2>{title} {"Sector"}</h2>
              
              <p> There are <strong>{numberOfTeacher}</strong> teacher in {title} sector</p>
              <h4> Estanlised science: {established}</h4><br />

              <hr />
              <br />
    
              <small>This is short description about {title} : {description}</small>

              
            </div>

          </div>
        })}

      </div>}

   
    </div>
  )
}

export default Alim_Features
