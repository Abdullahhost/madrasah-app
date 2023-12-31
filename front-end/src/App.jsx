import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux';  

import Home from './features/main_pages/home';
import Teacher_page from './features/main_pages/about';
import Features_pages from './features/main_pages/features';

// import NoticePage from './features/main_pages/noticedetails';
import President_page from './features/main_pages/president';
import Secretory_page from './features/main_pages/secretory';
import Worker_page from './features/main_pages/worker';
import Student_page from './features/main_pages/student';
import Login_page from './features/main_pages/login';
import Sign_up from './features/main_pages/signin';
import Protected from './settings/helper/protected';
import LoveofPeople_Page from './features/main_pages/loveofpeople';
import EbtedayeeResult_page from './features/main_pages/allresult';
import DakhilResult_Page from './features/main_pages/dakhilresult';
import Alim_Result_page from './features/main_pages/alimresult';
import Dakhil_Features_Page from './features/main_pages/dakhilfeatures';
import Alim_Features_Page from './features/main_pages/alimfeatures';
import Ebtedayee_Features_page from './features/main_pages/ebtedayeefeatures';
// import ChatPage from './features/pages_omponent/chatPage';

function App() {

  const getDataInformation = useSelector((state) => state.auth.user)
  

  useEffect(() => {
    Aos.init()
  }, [])

const lightDarkMode = useSelector(state => state.dark.dark)
  return (
    <div style={lightDarkMode ? {background : '#0F0F0F'} : {background: "#fff"} }>
      <BrowserRouter>

      <Routes>

        <Route  path='/signup' element={<Sign_up />} />
        <Route  path='/login' element={<Login_page />} />
        
      </Routes>

      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/teacher' element={<Teacher_page />} />
        <Route path='/features' element={<Features_pages />} />
        <Route path='/notice/:noticeTitle' element={<Protected getDataInformation={getDataInformation} />}/>
        <Route path='/president' element={<President_page />} />
        <Route path='/secretory' element={<Secretory_page />} />
        <Route path='/worker' element={<Worker_page />} />

        <Route path='/student' element={<Student_page />} />
        <Route path='/loveofpeople' element={<LoveofPeople_Page />} />
        <Route path='/ebtedayee_result_pannel' element={<EbtedayeeResult_page />} />
        <Route path='/dakhil_result_pannel' element={<DakhilResult_Page />} />
        <Route path='/alim_result_pannel' element={<Alim_Result_page />} />

        <Route path='/ebtedayesector' element={<Ebtedayee_Features_page />} />
        <Route path='/dakhilsector' element={<Dakhil_Features_Page />} />
        <Route path='/alimsector' element={<Alim_Features_Page />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



// https://momentum.photos/img/3feb7e8a-fc57-4d8d-bddb-6ab711d2284c.jpg?momo_cache_bg_uuid=3769298f-c6f6-490a-b7f5-c2391a61167e