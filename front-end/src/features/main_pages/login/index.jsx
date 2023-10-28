
import { useState } from 'react'

import './index.css'

import { useDispatch, useSelector } from 'react-redux'
import { authSliceActions } from '../../../settings/redux/slice/auth';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';



const Login_page = () => {


    const dispatch = useDispatch();

    const navigate = useNavigate();



    const [userInfo, setUserInfo] = useState({
        userName: undefined,
        password: undefined

    })

    const handleChange = (e) => {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))

    }



    const handleClick = async () => {

        dispatch(authSliceActions.loginStart())

        try {
            const res = await axios.post('https://madrasah-app.onrender.com/auth/login', userInfo, { withCredentials: true })
            dispatch(authSliceActions.loginSuccess(res.data));

            
            
            navigate('/');
            window.location.reload();

        } catch(err) {
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
                            <h2>Login Forms</h2>
                            <div className="inputBox">

                                <input type="text" placeholder="User Name" name="userName" onChange={handleChange} required />

                            </div>

                            <div className="inputBox">
                                <input type="password" placeholder="Password"   pattern=".{8,}" title="Eight or more characters" name="password" onChange={handleChange} />
                            </div>

                            <div className="inputBox">
                                <button onClick={handleClick} className='signUp'>
                                    Login
                                </button>
                            </div>

                    
                 

                            <p className="forget" style={{marginBottom: '.6rem', color: '#fff7'}}>Continue without login or sign up as a Gest mode ? <NavLink to={'/'}>Click here</NavLink></p>
                            <p className="forget">Dont Have not an account ? <Link to={'/signup'}>Sign up</Link></p>
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

export default Login_page
