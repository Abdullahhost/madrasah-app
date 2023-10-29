

import useFetch from '../../../settings/hooks'
import Skeleton from '../../skeloten'
const Secretory = () => {

  const {loading, data} = useFetch('https://madrasah-app.onrender.com/secretory')
  return (
    <div>
        {loading ? <Skeleton /> : <div className='card_ui_section'>
          
          
          {data?.map((item) => {
              return <div className='card_ui' key={item._id}>
                 <div className='pathdeasign'></div>
            <div className="card_image">
            <img src={`https://madrasah-app.onrender.com/${item.profile}`} alt="" />
            </div>
            <div className="card_content">
              <h2>{item.presidenceName}</h2>
              <small><strong>{item.designation} </strong> Shahdharipara K.A.S Alim Madrashah</small><br />
              <p>Depertment: <strong> {item.depertment} </strong></p>
              <p>Educational Qualification : {item.educationQualification}</p>
              <cite>Phone Number : {item.mobileNumber}</cite><br />
              <small>Email :{item.emailAddress}</small>
            </div>
          </div>
        })}
        
        </div>}
    </div>
  )
}

export default Secretory
