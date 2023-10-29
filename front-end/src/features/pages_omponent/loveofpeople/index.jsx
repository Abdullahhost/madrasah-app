import useFetch from "../../../settings/hooks"

import Skeleton from '../../skeloten'


const People = () => {


    const { data, loading } = useFetch('https://madrasah-app.onrender.com/loveofpeople')
    return (
        <>
            
          {loading ? <Skeleton /> : <div className='card_ui_section'>
          
          
          {data?.map((item,) => {

            const {peopleName, peopleAddress, mobileNumber, emailAddress, profile, _id } = item
              return <div className='card_ui' key={_id}>
                 <div className='pathdeasign'></div>
            <div className="card_image">
              <img src={`https://madrasah-app.onrender.com/${profile}`} alt="" />
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
