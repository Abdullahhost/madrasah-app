




import axios from 'axios'

import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

const StudentUpdate = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { _id, studentName, classNo, classRoll, fathersName, mothersName, address } = location.state

    const [teacherData, setTeacherData] = useState({
        studentName,
        classNo,
        classRoll,
        fathersName,
        mothersName,
        address
    })


    const handleChange = (e) => {
        setTeacherData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5001/student/${_id}`, teacherData, { withCredentials: true });
            navigate('/studentpannel')
        } catch (err) {
            console.log(err.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className="create_teacher">



            <div className="create_section_left">

                <p>Name</p>
                <input required type="text" name='studentName' onChange={handleChange} placeholder="Student Name here"  value={teacherData.studentName ? teacherData.studentName : studentName} />

                <p>Class</p>
                <input type="text" name='classNo' onChange={handleChange} placeholder="Student class No here"  value={teacherData.classNo ? teacherData.classNo : classNo} />

                <p>Roll</p>
                <input type="text" name='classRoll' onChange={handleChange} placeholder="Student class Roll here"   value={teacherData.classRoll ? teacherData.classRoll : classRoll}/>

            </div>
            <div className="create_section_right">
                <p>Father Name</p>
                <input type="text" name='fathersName' onChange={handleChange} placeholder="Mother Name here"  value={teacherData.fathersName ? teacherData.fathersName : fathersName} />

                <p>Mother Name</p>
                <input type="text" name='mothersName' onChange={handleChange} placeholder="Father Name here"  value={teacherData.mothersName ? teacherData.mothersName : mothersName} />

                <p>Address</p>
                <textarea cols={37} rows={5} name='address' onChange={handleChange}  value={teacherData.address ? teacherData.address : address} style={{ padding: '1rem', fontSize: '.9rem', fontFamily: 'sans-serif', textAlign: 'justify' }} ></textarea>
                <input className='submit_btn' type='submit' value={'Update Student'} />

            </div>

        </form>
    )
}

export default StudentUpdate
