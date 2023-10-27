

import './index.css';

import useFetch from '../../../settings/hooks'
import Skeleton from '../../skeloten';

const Teacher = () => {

  const { data, loading, } = useFetch('http://localhost:5001/teacher')

  // const images = ['images/teacher (1).jpg', 'images/teacher (2).jpg', 'images/teacher (3).jpg', 'images/teacher (4).jpg', 'images/teacher (6).jpg', 'images/teacher (7).jpg',]

  return (
    <>
      {loading ? <Skeleton /> : <div className='card_ui_section'>

        {data?.map((item) => {
          return <div className='card_ui' key={item._id}>
            <div className="card_image">
              <img src={`http://localhost:5001/${item.profile}`} alt="image" />
            </div>
            <div className="card_content">
              <h2>{item.teacherName}</h2>
              <small><strong>{item.designation} </strong> Shahdharipara K.A.S Alim Madrashah</small><br />
              <p>Depertment: <strong> {item.depertment} </strong></p>
              <p>Educational Qualification : {item.educationQualification}</p>
              <cite>Phone Number : {item.mobileNumber}</cite><br />
              <small>Email :{item.emailAddress}</small>
            </div>
          </div>
        })}


      </div>}
    </>
  )
}

export default Teacher


