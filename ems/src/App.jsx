import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage'
function App() {

  const [user, setUser] = useState(null);


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      console.log('Admin Login')
    } else if (email == 'user@me.com' && password == '123') {
      setUser('employee')
      console.log('This is user')
    } else {
      alert("invalid Credentials")
    }
  }
  // handleLogin('user@me.com', 123)


  // useEffect(() => {
  //   getLocalStorage()
  // });


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'employee' ? <EmployeeDashboard /> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}

    </>
  )
}

export default App