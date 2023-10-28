
import { Link } from 'react-router-dom'

import './index.css'

import useFetch from "../../../settings/hooks"
import { Delete, Update } from '@mui/icons-material';



const Teacher = () => {

  const { data } = useFetch('https://madrasah-app.onrender.com/teacher');
  return (
    <div style={{ padding: '1rem' }} className='table' >
      <table>
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Profile Picture</th>
            <th>Designation</th>
            <th>Depertcd ment</th>
            <th>Qualification</th>
            <th>Moblie Number</th>
            <th>Email Address</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((element, index) => {
            const { _id, teacherName, profile, designation,
              depertment, educationQualification,
              mobileNumber, emailAddress } = element
              console.log(profile)
            return <tr key={_id} className={index % 2 !== 0 ? "oddrow" : "evenrow"}>
              <td>{teacherName}</td>
              <td><img className='profile_picture' src={`https://madrasah-app.onrender.com/${profile}`} alt="image" /></td>
              <td>{designation}</td>
              <td>{depertment}</td>
              <td>{educationQualification}</td>
              <td>{mobileNumber}</td>
              <td>{emailAddress}</td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/updateteacher'} state={{ _id, teacherName, designation, depertment, emailAddress, profile, mobileNumber, educationQualification }} ><Update /></Link></td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/deleteTeacher'} state={{ _id }} style={{ border: 'none', cursor: 'pointer', background: "transparent" }}><Delete color='error' /></Link></td>
            </tr>
          })}

        </tbody>
      </table>

      <div className='new_btn'>
        <Link to='/createteacher' className='new_btn_icon'>+</Link>
      </div>

    </div>
  );
};
export default Teacher