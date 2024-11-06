import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage, getLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      // const admin = authData.admin.find(e => e.email === loggedInUser.email);
      setLoggedInUserData(authData.admin[0]);

      if (loggedInUser) {
        setUser(loggedInUser);
        if (loggedInUser.role === 'employee') {
          const employee = authData.employees.find(e => e.email === loggedInUser.email);

          setLoggedInUserData(employee);
        }
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminUser = { role: 'admin' };
      // setLoggedInUserData(employee);

      setUser(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
    } else if (authData) {
      const employee = authData.employees.find(e => email === e.email && password === e.password);
      if (employee) {
        const employeeUser = { role: 'employee', email: employee.email };
        setUser(employeeUser);
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
      } else {
        alert('Invalid Credentials');
        setUser(null);
      }
    } else {
      alert('Invalid Credentials');
      setUser(null);
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user?.role === 'admin' ? <AdminDashboard data={loggedInUserData} /> : (user?.role === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  );
}

export default App;