import React from 'react';

const TaskList = ({ data }) => {
    const cardData = data.data.tasks; // array
    console.log(cardData);

    return (
        <>
            <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 px-5 mt-10'>
                {cardData.map((element, index) => (
                    <div key={index} className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
                        <div className='flex justify-between items-center'>
                            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> {element.category} </h3>
                            <h4 className='text-sm'> {element.taskDate} </h4>
                        </div>
                        <h2 className='mt-5 text-2xl font-semibold'>{element.taskTitle}</h2>
                        <p className='text-sm mt-2'> {element.taskDescription} </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TaskList;