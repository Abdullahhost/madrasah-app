
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './features/header/navbar'
import Sidebar from './features/header/sidebar'
import AdminHome from './features/page/home'
import Teacher from './features/component/teacher'
import TeacherCreate from './features/component/teacher/createteacher'
import DeleteTeacher from './features/component/teacher/deleteteacher'
import TeacherUpdate from './features/component/teacher/updateteacher'
import Presidence from './features/component/presidence'
import PresidentCreate from './features/component/presidence/createpresidence'
import PresidentUpdate from './features/component/presidence/updatepresedence'
import DeletePresident from './features/component/presidence/deletepresidence'
import Secretory from './features/component/secratery'
import SecretoryCreate from './features/component/secratery/createsecretory'
import SecretoryUpdate from './features/component/secratery/updatesecretory'
import Worker from './features/component/worker'
import WorkerCreate from './features/component/worker/createworker'
import WorkerUpdate from './features/component/worker/updateworker'
import LoveOfPeople from './features/component/loveofpeople'
import LoveOfPeopleCreate from './features/component/loveofpeople/createloveofpeople'
import LoveOfPeopleUpdate from './features/component/loveofpeople/updateloveofpeople'
import DeleteLoveOfPeople from './features/component/loveofpeople/deletepeople'
import DeleteSecretory from './features/component/secratery/deletesecretory'
import DeleteWorker from './features/component/worker/deleteworker'
import Notice from './features/component/notice'
import NoticeUpdate from './features/component/notice/updatenotice'
import NoticeCreate from './features/component/notice/createnotice'
import DeleteNotice from './features/component/notice/deletenotice'
import Student from './features/component/student'
import StudentCreate from './features/component/student/createstudent'
import StudentUpdate from './features/component/student/updatestudent'
import DeleteStudent from './features/component/student/deletestudent'
import ResultEbtedayee from './features/component/resultebtedayee'
import DeleteEbtedayeeResult from './features/component/resultebtedayee/deleteebtedayeeresult'
import ResultAlim from './features/component/resultebtedayee/alimresult'
import ResultDakhil from './features/component/resultebtedayee/dhakhilresult'
import CreateEbtedayeeResult from './features/component/resultebtedayee/createresultebtedayee'
import FeaturesCreate from './features/component/features/createfeatures'
import AlimFeatures from './features/component/features/alimfeatures'
import DakhilFeatures from './features/component/features/dakhilfeatures'
import EbtedayeeFeatures from './features/component/features/ebtedayeefeatures'
import DakhilUpdate from './features/component/features/dakhilfeatures/update'
import DeleteFeatures from './features/component/features/deletefeatures/index.jsX'


function App() {
  return (
    <>
      <div className='admin_container'>
        <div>
          <Sidebar />
        </div>
        <div style={{width: '100%'}}>
          <Navbar />

          <Routes>
            <Route path='/' element={<AdminHome />} />

            {/* ===================== Teacher Route ==================== */}
            <Route path='/teacherpannel' element={<Teacher />} />
            <Route path='/createteacher' element={<TeacherCreate />} />
            <Route path='/deleteteacher' element={<DeleteTeacher />} />
            <Route path='/updateteacher' element={<TeacherUpdate />} />
  

            {/* ===================== President Route ==================== */}
            <Route path='/presidentpannel' element={<Presidence />} />
            <Route path='/createpresident' element={<PresidentCreate />} />
            <Route path='/updatepresidence' element={<PresidentUpdate />} />
            <Route path='/deletepresidence' element={<DeletePresident />} />


            {/* ===================== Secretory Route ==================== */}
            <Route path='/secretorypannel' element={<Secretory />} />
            <Route path='/createsecetory' element={<SecretoryCreate />} />
            <Route path='/updatesecretory' element={<SecretoryUpdate />} />
            <Route path='/deletesecretory' element={<DeleteSecretory />} />


            {/* ===================== Worker Route ==================== */}
            <Route path='/workerpannel' element={<Worker />} />
            <Route path='/createworker' element={<WorkerCreate />} />
            <Route path='/updateworker' element={<WorkerUpdate />} />
            <Route path='/deleteworker' element={<DeleteWorker />} />


            {/* ===================== People Route ==================== */}
            <Route path='/loveofpeoplepannel' element={<LoveOfPeople />} />
            <Route path='/createloveofpeople' element={<LoveOfPeopleCreate />} />
            <Route path='/updateloveofpeople' element={<LoveOfPeopleUpdate />} />
            <Route path='/deleteloveofpeople' element={<DeleteLoveOfPeople />} />


            {/* ===================== Notice Route ==================== */}
            <Route path='/noticepannel' element={<Notice />} />
            <Route path='/updatenotice' element={<NoticeUpdate />} />
            <Route path='/createnotice' element={<NoticeCreate />} />
            <Route path='/deletenotice' element={<DeleteNotice />} />

            
            {/* ===================== Notice Route ==================== */}
            <Route path='/studentpannel' element={<Student />} />
            <Route path='/createstudent' element={<StudentCreate />} />
            <Route path='/updatestudent' element={<StudentUpdate />} />
            <Route path='/deletestudent' element={<DeleteStudent />} />
    

            {/* ===================== Result Route ==================== */}
            <Route path='/class1to8resultpannel' element={<ResultEbtedayee />} />
            <Route path='/alimresulttpannel' element={<ResultAlim />} />
            <Route path='/dakhilresultpannel' element={<ResultDakhil />} />
            <Route path='/resultdeleteclassonetofour' element={<DeleteEbtedayeeResult />} />
            <Route path='/resultcreateclassonetofour' element={<CreateEbtedayeeResult />} />

            
            {/* ===================== Result Route ==================== */}
            <Route path='/alimpannel' element={<AlimFeatures />} />
            <Route path='/dakhilpannel' element={<DakhilFeatures />} />
            <Route path='/ebtedayepannel' element={<EbtedayeeFeatures />} />
            <Route path='/createfeatures' element={<FeaturesCreate />} />
            <Route path='/deletefeatures' element={<DeleteFeatures />} />


            {/* ===================== Result Route ==================== */}
            <Route path='/createfeatures' element={<DakhilUpdate />} />
          

          
          
          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
