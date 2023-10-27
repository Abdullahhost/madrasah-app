import useFetch from "../../../settings/hooks"

import Skeleton from '../../skeloten'


const People = () => {


    const { data, loading } = useFetch('http://localhost:5001/loveofpeople')
    return (
        <>
            
          {loading ? <Skeleton /> : <div className='card_ui_section'>
          
          
          {data?.map((item,) => {

            const {peopleName, peopleAddress, mobileNumber, emailAddress, profile, _id } = item
              return <div className='card_ui' key={_id}>
            <div className="card_image">
              <img src={`http://localhost:5001/${profile}`} alt="" />
            </div>
            <div className="card_content">
              <h2>{peopleName}</h2>
              <p>Address : {peopleAddress}</p>
              <cite>Phone Number : {mobileNumber}</cite><br />
              <small>Email :{emailAddress}</small>
            </div>
          </div>
        })}
        
        </div>}
        </>
    )
}

export default People
