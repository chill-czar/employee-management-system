import React from 'react'

const AllTask = ({data}) => {
    // console.log("alltaskdata: " , data)
    // console.log(data.tasks)
    let taskarr = data.tasks
    // console.log(taskarr)
    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 overflow-auto '>
            {taskarr.map((element, index) => (
                <div key={index} className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
                    <h2>{element.assignedTo}</h2>
                    <h3>{element.taskTitle}</h3>
                    <h5>{element.taskDate}</h5>
                </div>
            ))}
            {/* <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
                <h2>Sarthak</h2>
                <h3>Make a Ui deisgn </h3>
                <h5>Status</h5>
            </div> */}
        </div>
    )
}

export default AllTask