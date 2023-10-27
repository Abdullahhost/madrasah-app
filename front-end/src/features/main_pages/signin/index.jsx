
import { useState } from 'react'

import './index.css'

import { useDispatch, useSelector } from 'react-redux'
import { authSliceActions } from '../../../settings/redux/slice/auth';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';



const Sign_up = () => {


    const dispatch = useDispatch();

    const navigate = useNavigate();



    const [userInfo, setUserInfo] = useState({
        userName: undefined,
        email: undefined,
        password: undefined

    })

    const handleChange = (e) => {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }



    const handleClick = async () => {

        dispatch(authSliceActions.loginStart())

        try {
            const res = await axios.post('http://localhost:5001/auth/register', userInfo)
            dispatch(authSliceActions.loginSuccess(res.data));

            navigate('/');
            window.location.reload();
        } catch (err) {
            dispatch(authSliceActions.loginFailer(err.response.data))
        }
    }
    const getData = useSelector((state) => state.auth);
    return (
        <div>
            {getData.loading ? <Skeleton /> : <section className='login_section'>


                <div className="box">

                    <div className="square" style={{ "--i": 0 }}></div>
                    <div className="square" style={{ "--i": 1 }}></div>
                    <div className="square" style={{ "--i": 2 }}></div>
                    <div className="square" style={{ "--i": 3 }}></div>
                    <div className="square" style={{ "--i": 4 }}></div>

                    <div className="container">
                        <div className="form">
                            <h2>SignUP Forms</h2>
                            <div className="inputBox">

                                <input type="text" placeholder="User Name" name="userName" onChange={handleChange} required />

                            </div>

                            <div className="inputBox">
                                <input type="email" placeholder="Email" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title='Enter A valid Email' onChange={handleChange} />
                            </div>

                            <div className="inputBox">
                                <input type="password" placeholder="Password"   pattern=".{8,}" title="Eight or more characters" name="password" onChange={handleChange} />
                            </div>

                            <div className="inputBox">
                                <button onClick={handleClick} className='signUp'>
                                    Sign Up
                                </button>
                            </div>

                    
                 

                            <p className="forget">Forget password ? <a href="#">Click here</a></p>
                            <p className="forget">If you already have an account ? <Link to={'/login'}>Login</Link></p>
                        </div>
                    </div>

                </div>
                            <div className='alertBox'>
                                { getData.error && <h1 style={{color: "#fff"}}>{getData.error.message}</h1>}
                            </div>
            </section>

            }

        </div>
    )
}

export default Sign_up
