import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
// import Register  from './pages/Register';
import RegisterRedux from './pages/RegisterRedux'
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AdminLayout from "./layout/Admin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/registerRedux" element={<RegisterRedux />} />
        <Route element={<AdminLayout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
