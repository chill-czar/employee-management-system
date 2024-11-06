import React, { useState, useEffect, useContext } from 'react'



//  firts thing is collect data form forum wit use state
const CreateTaks = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Create a task object with the collected data
        const newTask = {
            taskTitle,
            taskDate,
            assignedTo,
            category,
            description,
        };
        const employeeData = JSON.parse(localStorage.getItem('employees'));
        console.log('employeeData:', employeeData)

        employeeData.map(obj => {
            if (obj && typeof obj === 'object' && 'name' in obj) {
                // console.log('Employee Found:', obj.name)
                const namechack = JSON.stringify(obj.name)
                if (namechack === JSON.stringify(assignedTo)) {
                    console.log('Employee Found:', namechack, obj.name)
                    console.log('namechack:', namechack)
                    console.log(obj.tasks)
                    obj.tasks.push(newTask)
                    let index = obj.id - 1
                    delete employeeData[index].tasks
                    employeeData[index] = newTask
                    console.log('employeeData:', employeeData)

                    function setLocalStorage() {
                        console.log('local storoage functin started ')
                        console.log('before remove of employe data:', employeeData)
                        localStorage.removeItem('employees');
                        console.log('after remova of employe data', employeeData)
                        localStorage.setItem('employees', JSON.stringify(employeeData));
                        console.log('new data set :', employeeData)

                    }
                    setLocalStorage()
                }
                return obj.name; // Return the name property
            } else {
                return console.log("EMPLOYEE NOT FOUND "); // Return null if the name property doesn't exist
            }
        })



        setTaskTitle('');
        setTaskDate('');
        setAssignedTo('');
        setCategory('');
        setDescription('');

    }






    return (
        <div className=' bg-[#1c1c1c] mt-7 p-5'>
            <form action="" className='flex flex-wrap w-full  items-start justify-between '>
                <div className='w-1/2 '>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                        <input
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            type="text"
                            placeholder='Make a UI design'
                            onChange={(e) => setTaskTitle(e.target.value)}
                            value={taskTitle} />
                    </div>
                    <div className='w-1/2'>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            className='text-sm py-1 px-2 w-4/5 text-black rounded outline-none bg-transparentborder-[1px] border-gray-400 '
                            type="date"
                            placeholder='12/12/2021'
                            onChange={(e) => setTaskDate(e.target.value)}
                            value={taskDate} />
                    </div>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Assing to</h3>
                        <input
                            className='text-sm text-black py-1 px-2 w-4/5 rounded outline-none bg-transparentborder-[1px] border-gray-400 '
                            type="text"
                            placeholder='Employee name'
                            onChange={(e) => setAssignedTo(e.target.value)}
                            value={assignedTo} />
                    </div>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                            type="text"
                            placeholder='design , dev, etc'
                            value={category} />
                    </div>

                </div>

                <div className='w-2/5 flex flex-col items-start '>

                    <h3 className='text-sm text-gray-300 mb-0.5 '>Description</h3>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        cols="30" rows="10"
                        value={description}
                    ></textarea>
                </div>

                <button
                    type='submit'
                    onClick={handleSubmit}
                    className=' bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTaks