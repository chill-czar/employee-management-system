import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 px-5  mt-10 '>
            <div className=' flex-shrink-0 h-full w-[300px]  bg-red-400 rounded-xl p-5 '>
                <div className='flex justify-between items-center '> 

                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtebe video</h2>
                <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus placeat sint aliquam ad cumque maiores?</p>
            </div>

        </div>
    )
}

export default TaskList