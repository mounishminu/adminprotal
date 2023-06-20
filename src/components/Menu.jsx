import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

  const Menu = () => {
  return (
    <section className='navbar navbar-vertical fixed-start navbar-expand-md navbar-light p-0 menu'>
        <nav>
                <div className=' ' style={{height :'100vh'}}>
            <div className='p-3'>
                <h1 className='text-primary'>AchiversIT</h1>
            </div>
            <div>
                <ul className='navbar-nav d-flex flex-column gap-2 px-4'>
                
                    <li className='nav-item'>
                   
                    <Link to='/' className='list-style text-secondary'>
                    <i className="fa-solid fa-house "></i>Dashboard
                    </Link>
                    </li>
                    <li className='nav-item'>
                     <Link to='/Users' className='list-style text-secondary'>
                     <i className="fa-sharp fa-solid fa-users"></i>Users
                     </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/products' className='list-style text-secondary'>
                      <i className="fa-brands fa-product-hunt"></i>Products
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/Login' className='list-style text-danger'>
                      <i className="fa-solid fa-right-from-bracket"></i>Signout
                      </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}
export default Menu;

