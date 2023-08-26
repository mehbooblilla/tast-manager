import React from 'react';
import TaskList from '../../components/taskList'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const TaskManager = () => {
  
    const tasks = useSelector((state) => state.tasks);
    const completedTasks = useSelector((state) => state.completedTasks);
    console.log(completedTasks,'tasks');
    return (
        <div className='flex flex-col p-8 items-center'>
            <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 w-full max-w-[800px] p-5 border-b bg-white rounded-t flex justify-between'>
                <div className='flex'>
                    <h1 className='text-xl font-semibold text-medium'>Tasks List
                    </h1>
                </div>
                <div className='flex'>
                    <Link to='taskManager/create'> <button className='py-2 px-4 text-blue-500 rounded-md font-semibold'>+ Create</button></Link>
                </div>
            </div>
            <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 w-full max-w-[800px] p-5  bg-white rounded-b flex justify-center'>

                <TaskList tasks={tasks} />
            </div>

        </div>
    );
}

export default TaskManager;
