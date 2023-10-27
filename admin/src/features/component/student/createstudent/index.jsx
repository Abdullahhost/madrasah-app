


import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const StudentCreate = () => {

    const navigate = useNavigate();
    const [teacherData, setTeacherData] = useState({
        studentName: undefined,
        classNo: undefined,
        classRoll: undefined,
        fathersName: undefined,
        mothersName: undefined,
        address: undefined
    })
    const handleChange = (e) => {
        setTeacherData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/student/create', teacherData, { withCredentials: true });
            navigate('/studentpannel')
        } catch (err) {
            console.log(err.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className="create_teacher">

            <div className="create_section_left">

                <p>Name</p>
                <input required type="text" name='studentName' onChange={handleChange} placeholder="Student Name here" />

                <p>Class</p>
                <input type="text" name='classNo' onChange={handleChange} placeholder="Student class No here" />

                <p>Roll</p>
                <input type="text" name='classRoll' onChange={handleChange} placeholder="Student class Roll here" />

            </div>
            <div className="create_section_right">
                <p>Father Name</p>
                <input type="text" name='fathersName' onChange={handleChange} placeholder="Mother Name here" />

                <p>Mother Name</p>
                <input type="text" name='mothersName' onChange={handleChange} placeholder="Father Name here" />

                <p>Address</p>
                <textarea cols={37} rows={5} name='address' onChange={handleChange} style={{ padding: '1rem', fontSize: '.9rem', fontFamily: 'sans-serif', textAlign: 'justify' }} ></textarea>
                <input className='submit_btn' type='submit' value={'Create Student'} />
                
            </div>
        </form>
    )
}

export default StudentCreate
