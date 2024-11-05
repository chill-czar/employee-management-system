import React from 'react'
import Headers from '../../others/Headers'
import CreateTaks from '../../others/CreateTaks'
import AllTask from '../../others/AllTask'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-7'>
            <Headers />
            <CreateTaks />
            <AllTask />

        </div>
    )
}

export default AdminDashboard