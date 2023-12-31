


import { Link } from 'react-router-dom'

import useFetch from "../../../settings/hooks"
import { Delete, Update } from '@mui/icons-material';



const Secretory = () => {

  const { data } = useFetch('https://madrasah-app.onrender.com/secretory');
  return (
    <div style={{ padding: '1rem' }} className='table' >
      <table>
        <thead>
          <tr>
            <th>Secratery Name</th>
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
            const { _id, secretoryName, profile, designation,
              educationQualification,
              mobileNumber, emailAddress } = element
              console.log(profile)
            return <tr key={_id} className={index % 2 !== 0 ? "oddrow" : "evenrow"}>
              <td>{secretoryName}</td>
              <td><img className='profile_picture' src={profile} alt="image" /></td>
              <td>{designation}</td>
              <td>{educationQualification}</td>
              <td>{mobileNumber}</td>
              <td>{emailAddress}</td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/updatesecretory'} state={{ _id, secretoryName, designation, emailAddress, profile, mobileNumber, educationQualification }} ><Update /></Link></td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/deletesecretory'} state={{ _id }} style={{ border: 'none', cursor: 'pointer', background: "transparent" }}><Delete color='error' /></Link></td>
            </tr>
          })}

        </tbody>
      </table>

      <div className='new_btn'>
        <Link to='/createsecetory' className='new_btn_icon'>+</Link>
      </div>

    </div>
  );
};
export default Secretory