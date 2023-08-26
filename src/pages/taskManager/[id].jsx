// Tasklist/[id].js
import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../../components/taskForm';
import { useSelector } from 'react-redux';

function EditTask() {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const task=tasks.filter((item)=> item.taskId===id)
 
  return (
    <div className='p-10 flex flex-col justify-center items-center'>
    <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 md:w-2/3 w-full max-w-[800px]  p-5 bg-white rounded-t flex border-b'>
    <h1 className='text-xl font-semibold text-medium'>Edit Task
    </h1>
    </div>
    <div className='lg:w-2/3 xl:w-2/3 2xl:w-2/3 md:w-2/3 w-full max-w-[800px] '>
    <TaskForm initialValues={task[0]}/>

    </div>
    
</div>
  );
}

export default EditTask;
