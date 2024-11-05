import React from 'react'

const CreateTaks = () => {
    return (
        <div className=' bg-[#1c1c1c] mt-7 p-5'>
            <form action="" className='flex flex-wrap w-full  items-start justify-between '>
                <div className='w-1/2 '>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a UI design' />
                    </div>
                    <div className='w-1/2'>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparentborder-[1px] border-gray-400 ' type="date" placeholder='12/12/2021' />
                    </div>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Assing to</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparentborder-[1px] border-gray-400 ' type="text" name="" id="" placeholder='Employee name' />
                    </div>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Cateory</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='employee name' />
                    </div>
                    <div>

                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='design , dev, etc' />
                    </div>

                </div>

                <div className='w-2/5 flex flex-col items-start '>

                    <h3 className='text-sm text-gray-300 mb-0.5 '>Description</h3>
                    <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" cols="30" rows="10" id=""></textarea>
                </div>

                <button className=' bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTaks