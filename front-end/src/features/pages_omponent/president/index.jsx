import useFetch from "../../../settings/hooks"

import Skeleton from '../../skeloten'


const President = () => {


    const { data, loading } = useFetch('http://localhost:5001/presidence')
    return (
        <>
            
          {loading ? <Skeleton /> : <div className='card_ui_section'>
          
          
          {data?.map((item,) => {

            const {presidenceName, designation, educationQualification, mobileNumber, emailAddress, profile, _id } = item
              return <div className='card_ui' key={_id}>
            <div className="card_image">
              <img src={`http://localhost:5001/${profile}`} alt="" />
            </div>
            <div className="card_content">
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
