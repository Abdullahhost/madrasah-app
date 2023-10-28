



import { Link } from 'react-router-dom'

import useFetch from "../../../settings/hooks"
import { Delete, Update } from '@mui/icons-material';



const Notice = () => {

  const { data } = useFetch('https://madrasah-app.onrender.com/notice');
  return (
    <div style={{ padding: '1rem' }} className='table' >
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((element, index) => {
            const { _id, noticeTitle, noticeDetails} = element
        
            return <tr key={_id} className={index % 2 !== 0 ? "oddrow" : "evenrow"}>
              <td >{noticeTitle}</td>
              <td>{noticeDetails}</td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/updatenotice'} state={{ _id, noticeTitle, noticeDetails }} ><Update /></Link></td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/deletenotice'} state={{ _id }} style={{ border: 'none', cursor: 'pointer', background: "transparent" }}><Delete color='error' /></Link></td>
            </tr>
          })}

        </tbody>
      </table>

      <div className='new_btn'>
        <Link to='/createnotice' className='new_btn_icon'>+</Link>
      </div>

    </div>
  );
};
export default Notice