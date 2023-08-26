import React from 'react'
import 'rc-table/assets/index.css';
// import { default as Table } from 'rc-table';
import {AiFillDelete} from "react-icons/ai";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { deleteCompletedTask } from '../redux/taskAction';
function CompletedList({ tasks }) {
    const dispatch = useDispatch();
    const confirmDelete = (id) => {
        dispatch(deleteCompletedTask(id))
        toast.success("Task Deleted")
    }
    // const columns = [
    //     {
    //         title: <span >Title</span>,
    //         dataIndex: 'title',
    //         key: 'title',
    //         align: 'start',


    //     },
    //     {
    //         title: <span >Due Date</span>,
    //         dataIndex: 'due_date',
    //         key: 'actions',
    //         align: 'start',

    //     },
    //     {
    //         title: <span>Status</span>,
    //         className: 'cursor-pointer',
    //         dataIndex: 'name',
    //         key: 'name',
    //         align: 'center',
    //         width: 150,
    //         render: (name, data) => {
    //             return (
    //                 <div className="px-4 py-2 bg-green-600 text-white  rounded">
    //                     Completed
    //                 </div>
    //             );
    //         },
    //     },
    // ];
    return (
        <>

            <div className='w-full'>
                {/* <Table
                    columns={columns}
                    className='border-none'
                    data={tasks}
                    rowKey={(task) => task.taskId}
                  scroll={{ x: 380 }}
                /> */}
                {tasks?.map((task, index) => (
                    <div key={index} className='flex justify-between bg-gray-50 p-2 border-b' >
                        <div>
                            <div className='font-medium text-lg '>{task.title}</div>
                            <div className='font-light text-base '>{task?.due_date}</div>
                        </div>
                        <div className='flex items-center'>
                       
                            <div className='mx-2 text-red-500 text-xl cursor-pointer'  onClick={() => { confirmDelete(task?.taskId) }}><AiFillDelete/></div>
                        </div>
                    </div>
                ))}
                {tasks.length === 0 &&
                    <div className='flex justify-center'>
                        No Data
                    </div>
                }

            </div>
        </>
    )
}
export default CompletedList