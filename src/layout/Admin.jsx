import React from 'react'
import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'

 const AdminLayout = () => {
  return (
    <div className='d-flex'>
        <Menu />
        <div>
        <Outlet />
        </div>
    </div>
  )
}
export default AdminLayout;

