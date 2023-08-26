import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold text-lg">Task Manager</div>
          <ul className="flex space-x-4">
            <Link to={'/'}>
            <li className="text-white hover:text-gray-300">Home</li>
            </Link>
            <Link to={'/completedTasks'}>
            <li className="text-white hover:text-gray-300">Completed task</li>
            </Link>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
