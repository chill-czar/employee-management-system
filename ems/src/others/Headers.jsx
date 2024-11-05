import React from 'react'

const Headers = () => {
  return (
    <div className="flex items-end justify-between">
          <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl'> Sarthak 👋</span></h1>
        <button className='bg-red-500 text-white py-2 px-5 rounded-sm text-lg font-medium'>Logout</button>
    </div>
  )
}

export default Headers