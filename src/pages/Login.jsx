import React, { useState, useReducer } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Img1 from '../images/login.png';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length > 5) {
            navigate('/');
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            toast.error('Invalid Credentials');
        }
    };

    return (
        <section className="row loginpage">
            <div className="col">
                <ToastContainer />
                <form className="text-center loginform" onSubmit={handleSubmit}>
                    <h2 className="text-danger">Achivers IT</h2>
                    <h3>Admin Console</h3>
                    <h4 className="text-danger">Development</h4>

                    <div>
                        <label>Email Address</label> <br />
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="User Name"
                        />
                    </div>
                    <br />

                    <div>
                        <label>Password</label> <br />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                        />
                    </div>
                    <br />

                    <button className="bg-danger rounded-start rounded-end btn" type="submit">
                        Sign in
                    </button>
                    <br />
                    <span>Dont Have An Account?</span>
                    <Link to="/RegisterRedux">Register</Link>
                </form>
            </div>

            <div className="col text-center">
                <img src={Img1} alt="img" />
            </div>
        </section>
    );
};

export default Login;
