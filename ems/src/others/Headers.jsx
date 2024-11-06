import React from 'react'

const Headers = ({ data }) => {
  // console.log(data.name)
  // const {name} = data

  function Logout() {
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }

  let name = ''
  if (localStorage.getItem('loggedInUser') == '{"role":"admin"}') {
    name = data.name
  } else {
    name = data.data.name
  }
  // Example usage // Replace 'myKey' with the actual key you want to delete

  return (
    <div className="flex items-end justify-between">
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl'>
        {/* {data.data.name}  */}
        {name}
        👋</span></h1>
      <button className='bg-red-500 text-white py-2 px-5 rounded-sm text-lg font-medium' onClick={Logout}>Logout</button>
    </div>
  )
}

export default Headers