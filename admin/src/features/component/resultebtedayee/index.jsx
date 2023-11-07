
import './index.css'

import useFetch from "../../../settings/hooks"
import { Delete } from '@mui/icons-material'
import { Link } from 'react-router-dom';


const ResultEbtedayee = () => {

  const { data } = useFetch('https://madrasah-app.onrender.com/classonetofour/Ebtedayee');

  return (
    <>
      {data?.map((el) => {

        const { _id, title, pdfFile } = el
        return (
          <div className='pdf_section' key={_id}>

            <div className="result_title_section">
              <h3>{title}</h3>
              <Link style={{
                width: '2rem', height: '2rem',
                display: 'grid', placeItems: 'center',
                background: '#fff', borderRadius: '50%',
                marginRight: '1rem'
              }}
                to={'/resultdeleteclassonetofour'}
                state={{ _id }}
              >
                <Delete color='error' />
              </Link>
            </div>

            <embed

              src={pdfFile}
              style={{ margin: '0 auto', display: 'block' }}
              width="95%"
              height="650px"
              title={'samplePdf'}

            />


          </div>
        )
      })}
            <div className='new_btn'>
              <Link to='/resultcreateclassonetofour' className='new_btn_icon'>+</Link>
            </div>

    </>
  );
};
export default ResultEbtedayee