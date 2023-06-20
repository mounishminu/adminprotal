import React, { useState, useReducer } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import Img3 from '../images/img3.jpg'
import './register.css';

const RegisterRedux = () => {
    const entity = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('values', email, password, name)
        dispatch({ type: "EMAIL", payload: email })
        dispatch({ type: "NAME", payload: name }) 
        dispatch({ type: "PASSWORD", payload: password })
        navigate('/')
    }

  return (
    <section> 
        <section className='row bg-warning sec'>
      <h1 className='text-danger text-center mt-5 text-decoration-underline'>
        Registration form
      </h1>
      <div className='col'>
        <form className='text-center Rform' onSubmit={handleSubmit}>
          <ToastContainer />
          <div>
            <label>Email Address:</label> <br />
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email'/>
          </div>
          <br />
          <div>
            <label>UserName:</label> <br />
            <input type='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Username' />
          </div>
          <br />
          <div>
            <label>Password:</label> <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
          </div>
          <br />
          <div>
            <label>Confirm Password:</label> <br />
            <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } placeholder='re-enter password'/>
          </div><br/>
         
          <div>
                 <button type='submit' className='bg-primary btn2'>Register</button>
          </div>
            </form>
           </div> 
                <div className='col'>
                  <img src={Img3} alt="register" />
                  </div>
                
            </section>
    </section>
  )
}

export default RegisterRedux
