
import useFetch from "../../../settings/hooks"
import Skeleton from '../../skeloten'

import { useSelector } from 'react-redux';

const President = () => {
  
  const lightDarkMode = useSelector(state => state.dark.dark)

  const { data, loading } = useFetch('https://madrasah-app.onrender.com/presidence')
  return (
    <>

      {loading ? <Skeleton /> : <div className='card_ui_section'>

        {data?.map((item,) => {

          const { presidenceName, designation, educationQualification, mobileNumber, emailAddress, profile, _id } = item
          return <div className='card_ui' 
          style={lightDarkMode
            ?
            {
              boxShadow: "0 0 5px #fff",
              border: '1px solid #fff1'
            }
            :
            {
              boxShadow: "0 0 5px rgba(59, 59, 59, 0.467)",
              border: "1px solid #0001"
            }
  
          }

          key={_id}>
            <div className='pathdeasign'
            
            style={
              lightDarkMode
                ?
                { background: "radial-gradient(rgb(255, 255, 100) 10%, rgb(201, 255, 180) 30%, rgb(0, 0, 0))" }

                :
                { background: 'radial-gradient(rgb(251, 255, 0) 20%, rgb(201, 255, 180), rgb(255, 255, 255))' }
            }
            >

            </div>
            <div className="card_image">
              <img src={profile} alt="President Image" />
            </div>
            <div className="card_content"
            
            style={lightDarkMode ?

              { background: "linear-gradient(to top,  #333 ,#0002)", color: "#fff" }
              :
              { background: "linear-gradient(to top, #0002, #fff)" }
            }

            >
              <h2>{presidenceName}</h2>
              <small><strong>{designation} </strong> Shahdharipara K.A.S Alim Madrashah</small><br />
              <p>Educational Qualification : {educationQualification}</p>
              <cite>Phone Number : {mobileNumber}</cite><br />
              <small>Email :{emailAddress}</small>
            </div>
          </div>
        })}

      </div>}
    </>
  )
}

export default President
