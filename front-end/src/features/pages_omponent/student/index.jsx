

import useFetch from '../../../settings/hooks'
import Skeleton from '../../skeloten'

import './index.css'

const Student = () => {
    const { data, loading } = useFetch('http://localhost:5001/student')

    return (
        <>
            {loading ? <Skeleton /> : <div style={{overflowX: 'auto', width: '100%', background: '#132323', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>


                <table >
                    <thead>
                        <tr className='tableHead'>
                            <td>Sl.no</td>
                            <td>StudentName</td>
                            <td>Class</td>
                            <td>ClassRoll</td>
                            <td>Father Name</td>
                            <td>Mother Name</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((ele, index) => {
                            const {_id, studentName, classNo, classRoll, fathersName, mothersName, address} = ele
                            return <tr tabIndex={'1'} className={index % 2!== 0 ? 'oddRow' : 'evenRow'} key={_id}>
                                <td>{index + 1}</td>
                                <td>{studentName}</td>
                                <td>{classNo}</td>
                                <td>{classRoll}</td>
                                <td>{fathersName}</td>
                                <td>{mothersName}</td>
                                <td>{address}</td>
                            </tr>
                        })}
                    </tbody>
                </table>


            </div>}
        </>
    )
}

export default Student
