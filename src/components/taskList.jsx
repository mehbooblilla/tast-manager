import React, { useState } from 'react'
import 'rc-table/assets/index.css';
// import { Menu, Transition } from '@headlessui/react';
// import { default as Table } from 'rc-table';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import exclamtionImg from '../assets/Exclamation_mark.png'
import { deleteTask, completeTask } from '../redux/taskAction';
import { toast } from 'react-toastify';
import { FiEdit } from "react-icons/fi";
import {TiTickOutline} from "react-icons/ti";
import {AiFillDelete} from "react-icons/ai";
function TaskList({ tasks }) {
    const [modalIsOpen, setModelIsOpen] = useState(false)
    const [taskId, setTaskId] = useState(null)
    const dispatch = useDispatch();
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            // border: 'none',
            backgroundColor: 'rgb(248 250 252)',
            transform: 'translate(-50%, -50%)',
        },
    };
    const handleDelete = (id) => {
        setTaskId(id)

        setModelIsOpen(!modalIsOpen)
    }
    const handleCompletedTask = (id) => {
        dispatch(completeTask(id))
        toast.success("Task completed")
    }
    const confirmDelete = () => {
        dispatch(deleteTask(taskId))
        setModelIsOpen(!modalIsOpen)
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
    //         title: <span>Action</span>,
    //         className: 'cursor-pointer',
    //         dataIndex: 'name',
    //         key: 'name',
    //         align: 'center',
    //         width: 100,
    //         render: (name, data) => {
    //             return (
    //                 <div className="whitespace-normal ">
    //                     <Menu
    //                         style={{ width: 160 }}
    //                         as="div"
    //                         className="relative inline-block text-left"
    //                     >
    //                         <div className="flex justify-center">
    //                             <Menu.Button className="inline-flex bg-black w-24 justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-light text-white hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
    //                                 Action
    //                             </Menu.Button>
    //                         </div>
    //                         <Transition

    //                             enter="transition ease-out duration-100"
    //                             enterFrom="transform opacity-0 scale-95"
    //                             enterTo="transform opacity-100 scale-100"
    //                             leave="transition ease-in duration-75"
    //                             leaveFrom="transform opacity-100 scale-100"
    //                             leaveTo="transform opacity-0 scale-95"
    //                         >
    //                             <Menu.Items className="relative right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                                 <div className="px-1 py-1 ">
    //                                     <Menu.Item>
    //                                         {({ active }) => (
    //                                             <Link
    //                                                 to={`/taskManager/${data?.taskId}`}
    //                                                 className={`${active ? ' text-white' : 'text-gray-900'
    //                                                     } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-black hover:text-white`}
    //                                             >
    //                                                 Edit
    //                                             </Link>
    //                                         )}
    //                                     </Menu.Item>
    //                                     <Menu.Item>
    //                                         {({ active }) => (
    //                                             <span
    //                                                 onClick={() => { handleDelete(data?.taskId) }}
    //                                                 className={`${active ? 'bg-accent text-white' : 'text-gray-900'
    //                                                     } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-black hover:text-white`}
    //                                             >
    //                                                 Delete
    //                                             </span>
    //                                         )}
    //                                     </Menu.Item>
    //                                     <Menu.Item>
    //                                         {({ active }) => (
    //                                             <span
    //                                                 onClick={() => { handleCompletedTask(data?.taskId) }}
    //                                                 className={`${active ? 'bg-accent text-white' : 'text-gray-900'
    //                                                     } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-black hover:text-white`}
    //                                             >
    //                                                 Complete Task
    //                                             </span>
    //                                         )}
    //                                     </Menu.Item>
    //                                 </div>
    //                             </Menu.Items>

    //                         </Transition>
    //                     </Menu>
    //                 </div>
    //             );
    //         },
    //     },
    // ];
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { setModelIsOpen(false) }}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div>
                    <div className='border-b flex flex-col items-center justify-center'>
                        <img src={exclamtionImg} width={50} height={50} alt="img" />
                        <h2 className='font-semibold p-2'>Are you sure you want to delete this task?</h2>
                    </div>

                    <div className='py-2 justify-between flex'>
                        <button onClick={() => { setModelIsOpen(false) }} className='ml-5 bg-blue-400 text-white font-semibold px-4 py-2 rounded-lg'>Cancel</button>
                        <button onClick={confirmDelete} className='ml-5 bg-red-600 text-white font-semibold px-4 py-2 rounded-lg'>Confirm</button>
                    </div>
                </div>


            </Modal>
            <div className='w-full '>
                {/* <Table

                    columns={columns}
                    className='border-none'
                    data={tasks}
                    rowKey={(task) => task.taskId}
                  scroll={{ x: 380 }}
                /> */}
                {tasks?.map((task,index) => (
                    <div key={index} className='flex justify-between bg-gray-50 p-2 border-b' >
                        <div>
                            <div className='font-medium text-lg '>{task.title}</div>
                            <div className='font-light text-base '>{task?.due_date}</div>
                        </div>
                        <div className='flex items-center'>
                        <Link to={`/taskManager/${task?.taskId}`} >
                        <div className='mx-2 text-gray-500 text-xl cursor-pointer' ><FiEdit/></div>
                                                 </Link>
                            
                            <div className='mx-2 text-green-500 text-2xl cursor-pointer'  onClick={() => { handleCompletedTask(task?.taskId) }} ><TiTickOutline/></div>
                            <div className='mx-2 text-red-500 text-xl cursor-pointer'  onClick={() => { handleDelete(task?.taskId) }}><AiFillDelete/></div>
                        </div>
                    </div>
                ))}
                {tasks.length===0 &&
                <div className='flex justify-center'>
                    No Data
                    </div>
                }



            </div>
        </>
    )
}
export default TaskList