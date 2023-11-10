






import { Link } from 'react-router-dom'


import useFetch from '../../../../settings/hooks';

import { Delete, Update } from '@mui/icons-material';

const EbtedayeeFeatures = () => {

  const { data } = useFetch('https://madrasah-app.onrender.com/alimfeatures/Ebtedayee');
  return (
    <div style={{ padding: '1rem' }} className='table featurestable' >
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Picture gallery</th>
            <th>Established</th>
            <th>Teacher</th>
            <th>Description</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((element, index) => {
            const { _id, title, profile, established,
              numberOfTeacher, description} = element
            return <tr key={_id} className={index % 2 !== 0 ? "oddrow" : "evenrow"}>
              <td>{title}</td>
              <td style={{width:'300px'}}><img className='features_profile_picture' src={profile} alt="image" /></td>
              <td>{established}</td>
              <td>{numberOfTeacher}</td>
              <td><p>{description}</p></td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/updatedakhil'} state={{ _id, title, established, numberOfTeacher, profile, description }} ><Update /></Link></td>
              <td style={{ padding: '0rem 1rem' }}><Link to={'/deletefeatures'} state={{ _id }} style={{ border: 'none', cursor: 'pointer', background: "transparent" }}><Delete color='error' /></Link></td>
            </tr>
          })}

        </tbody>
      </table>

      <div className='new_btn'>
        <Link to='/createfeatures' className='new_btn_icon'>+</Link>
      </div>

    </div>
  );
};
export default EbtedayeeFeatures