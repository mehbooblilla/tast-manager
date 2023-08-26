import React from 'react';
import TaskForm from '../../components/taskForm';

const Create = () => {
    return (
        <div className='lg:p-10 xl:p-10 2xl:p-10 p-6  flex flex-col justify-center items-center'>
            <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 md:w-2/3 w-full max-w-[800px]  p-5 bg-white rounded-t flex border-b'>
            <h1 className='text-xl font-semibold text-medium'>Create New Task
            </h1>
            </div>
            <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 md:w-2/3 w-full max-w-[800px]'>
            <TaskForm/>

            </div>
            
        </div>
    );
}

export default Create;
