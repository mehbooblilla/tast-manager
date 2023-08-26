import React from 'react';
import CompletedTaskList from '../components/competeTaskList'
import { useSelector } from "react-redux";
const CompletedTask = () => {
  
    const completedTasks = useSelector((state) => state.completedTasks);
  console.log(completedTasks);
    return (
        <div className='flex flex-col p-8  items-center'>
            <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 w-full max-w-[800px] p-5 border-b bg-white rounded-t flex justify-between'>
                <div className='flex'>
                    <h1 className='text-xl font-semibold text-medium text-green-500'>Completed Tasks</h1>
                </div>
             
            </div>
            <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 w-full max-w-[800px]  p-5 bg-white rounded-b flex justify-center'>

                <CompletedTaskList tasks={completedTasks} />
            </div>

        </div>
    );
}

export default CompletedTask;
