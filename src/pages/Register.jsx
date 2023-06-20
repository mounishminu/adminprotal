import React, { useState, useReducer } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import Img3 from '../images/img3.jpg';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  // const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()
  const ACTIONS = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
    CONFIRM_PASSWORD: 'confirm_password',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.EMAIL:
        return { ...state, email: action.payload };
      case ACTIONS.PASSWORD:
        return { ...state, password: action.payload };
      case ACTIONS.NAME:
        return { ...state, name: action.payload };
      case ACTIONS.CONFIRM_PASSWORD:
        return { ...state, confirm_password: action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    email: '',
    name: '',
    password: '',
    confirm_password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const { name, email, password, confirm_password } = state;
    if (email.length > 5 && password === confirm_password) {
      let newObj = { email, name };
      localStorage.setItem('user', JSON.stringify(newObj));
      // return <Navigate to='/' />;
      navigate('/')
    } else if (password !== confirm_password) {
      toast.error('Password do not match');
    }
  };

  return (
    <section className='row bg-warning sec'>
      <h1 className='text-danger text-center mt-5 text-decoration-underline'>
        Registration form
      </h1>
      <div className='col'>
        <form className='text-center Rform' onSubmit={handleSubmit}>
          <ToastContainer />
          <div>
            <label>Email Address:</label> <br />
            <input
              type='text'
              value={state.email}
              onChange={(e) =>
                dispatch({ type: ACTIONS.EMAIL, payload: e.target.value })
              }
              name='email'
            />
          </div>
          <br />
          <div>
            <label>UserName:</label> <br />
            <input
              type='text'
              name='UserName'
              value={state.name}
              onChange={(e) =>
                dispatch({ type: ACTIONS.NAME, payload: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <label>Password:</label> <br />
            <input
              type='password'
              value={state.password}
              onChange={(e) =>
                dispatch({ type: ACTIONS.PASSWORD, payload: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <label>Confirm Password:</label> <br />
            <input
              type='password'
              value={state.confirm_password}
              onChange={(e) =>
                dispatch({ type: ACTIONS.CONFIRM_PASSWORD, payload: e.target.value })} />
          </div><br />
          <div>
            <button type='submit' className='bg-primary btn2'>Register</button>
          </div>
        </form>
      </div>
      <div className='col'>
        <img src={Img3} alt="register" />
      </div>

    </section>
  )
}
export default Register