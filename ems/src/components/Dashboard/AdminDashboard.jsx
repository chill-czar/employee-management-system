import React from 'react'
import Headers from '../../others/Headers'
import CreateTaks from '../../others/CreateTaks'
import AllTask from '../../others/AllTask'

const AdminDashboard = ({ data }) => {
    return (
        <div className='h-screen w-full p-7'>
            <Headers data={data} />
            <CreateTaks data={data} />
            <AllTask data={data} />

        </div>
    )
}

export default AdminDashboard