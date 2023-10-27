



import { Link } from 'react-router-dom'

import useFetch from "../../../settings/hooks"
import { Delete, Update } from '@mui/icons-material';



const Worker = () => {

  const { data } = useFetch('http://127.0.0.1:5001/worker');
  return (
    <div style={{ padding: '1rem' }} className='table' >
      <table>
        <thead>
          <tr>
            <th>Worker Name</th>
            <th>Profile Picture</th>
            <th>Designation</th>
            <th>Qualification</th>
            <th>Moblie Number</th>
            <th>Email Address</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((element, index) => {
            const { _id, workerName, profile, designation,
              educationQualification,
              mobileNumber, emailAddress } = element
              console.log(profile)
            return <tr key={_id} className={index % 2 !== 0 ? "oddrow" : "evenrow"}>
              <td>{workerName}</td>
              <td><img className='profile_picture' src={`http://localhost:5001/${profile}`} alt="image" /></td>
              <td>{designation}</td>
              <td>{educationQualification}</td>
              <td>{mobileNumber}</td>
              <td>{emailAddress}</td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/updateworker'} state={{ _id, workerName, designation, emailAddress, profile, mobileNumber, educationQualification }} ><Update /></Link></td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/deleteworker'} state={{ _id }} style={{ border: 'none', cursor: 'pointer', background: "transparent" }}><Delete color='error' /></Link></td>
            </tr>
          })}

        </tbody>
      </table>

      <div className='new_btn'>
        <Link to='/createworker' className='new_btn_icon'>+</Link>
      </div>

    </div>
  );
};
export default Worker