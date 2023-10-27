





import { Link } from 'react-router-dom'

import useFetch from "../../../settings/hooks"
import { Delete, Update } from '@mui/icons-material';



const Student = () => {

  const { data } = useFetch('http://127.0.0.1:5001/student');
  return (
    <div style={{ padding: '1rem' }} className='table' >
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Class No</th>
            <th>Class Roll</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Address</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((element, index) => {
            const { _id, studentName, classNo, classRoll, fathersName, mothersName, address} = element
        
            return <tr key={_id} className={index % 2 !== 0 ? "oddrow" : "evenrow"}>
              <td >{studentName}</td>
              <td>{classNo}</td>
              <td>{classRoll}</td>
              <td>{fathersName}</td>
              <td>{mothersName}</td>
              <td>{address}</td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/updatestudent'} state={{ _id, studentName, classNo, classRoll, fathersName, mothersName, address }} ><Update /></Link></td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/deletestudent'} state={{ _id }} style={{ border: 'none', cursor: 'pointer', background: "transparent" }}><Delete color='error' /></Link></td>
            </tr>
          })}

        </tbody>
      </table>

      <div className='new_btn'>
        <Link to='/createstudent' className='new_btn_icon'>+</Link>
      </div>

    </div>
  );
};
export default Student