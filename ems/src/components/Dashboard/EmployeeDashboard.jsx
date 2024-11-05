import React from 'react'
import Headers from '../../others/Headers'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div  className=' text p-10 bg-[#1C1C1C] h-screen '>
       
            <Headers />
            <TaskListNumber />
            <TaskList />
       
    </div>
  )
}

export default EmployeeDashboard