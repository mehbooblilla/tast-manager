
import './App.css';
import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskManager from './pages/taskManager/taskManager';
import { ToastContainer } from 'react-toastify';
import Create from './pages/taskManager/create'
import 'react-toastify/dist/ReactToastify.css';
import EditTask from './pages/taskManager/[id]';
import Navbar from './components/navbar';
import CompletedTask from './pages/completedTask';
function App() {
  
  return (
    <div>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<TaskManager/>}/>
      <Route path='/taskManager/create' element={<Create/>}/>
      <Route path='/taskManager/:id' element={<EditTask/>}/>
      <Route path='/completedTasks' element={<CompletedTask/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </div>
  );
}

export default App;
