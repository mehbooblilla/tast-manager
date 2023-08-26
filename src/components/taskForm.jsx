import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/taskAction";
import uniqueId from 'lodash/uniqueId';
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
const defaultValues = {
    title: '',
    description: '',
    due_date: '',
    additional_information: '',
    taskId:''

};
const TaskForm = ({ initialValues }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        //@ts-ignore
        defaultValues: initialValues
            ? {
                ...initialValues,
            }
            : defaultValues,
    });
 
    const dispatch = useDispatch();
    const [taskId] = useState(uniqueId());
    const navigate = useNavigate();
    const onSubmit = (values) => {
       
        const taskData={
            ...values, taskId
        } 
    
        if(initialValues){
            dispatch(editTask(values))
            toast.success("Updated successfully");
            navigate("/");
          
        }else{
            dispatch(addTask(taskData))
            toast.success("Task added successfully");
            navigate("/");
          
       
        }

    };
    return (
        <div className='bg-white p-5 rounded-b'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-5 flex ">


                    <div className="w-full">
                        <div className='flex flex-col'>
                            <label className='block mb-3 text-sm font-semibold leading-none text-body-dark' htmlFor="">Title *</label>
                            <input

                                {...register('title', {
                                    required: "Please enter title"
                                })}

                                // variant="outline"
                                type='text'
                                className="  border outline-none p-2 rounded-md border-gray-800"
                            />
                            {errors.due_date && (
                                <p className="text-red-500">{errors.title.message}</p>
                            )}
                        </div>
                        <div className='flex flex-col'>
                            <label className='block mb-3 mt-3 text-sm font-semibold leading-none text-body-dark' htmlFor="">Description</label>
                            <input

                                {...register('description')}
                                error={errors.title?.message}
                                variant="outline"
                                type='text'
                                className="mb-5 border outline-none p-2 rounded-md border-gray-800"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='block mb-3 text-sm font-semibold leading-none text-body-dark' htmlFor="">Due Date *</label>
                            <input
                                {...register('due_date')}
                                variant="outline"
                                type="text"
                                placeholder="dd/mm/yyyy"
                                className=" border outline-none p-2 rounded-md border-gray-800"
                                required
                            />

                            {errors.due_date && (
                                <p className="text-red-500">{errors.due_date.message}</p>
                            )}
                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        </div>
                        <div className='flex flex-col'>
                            <label className='block mb-3 mt-3 text-sm font-semibold leading-none text-body-dark' htmlFor="">Additional Notes</label>
                            <textarea

                                {...register('additional_information')}
                                error={errors.additions_information?.message}
                                variant="outline"
                                type='text'
                                className="mb-5 border outline-none p-2 rounded-md h-32 border-gray-800"
                            />
                        </div>

                    </div>
                </div>



                <div className="mb-4 text-end">
                    <Link to={'/'}>
                        <button
                            className="me-4 bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-red-400"
                            type="button"
                        >
                            Back
                        </button>
                    </Link>



                    <button className='bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-green-500' >
                        {initialValues ? "update" : "Add"}
                    
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;
