// src/components/Sidebar/Sidebar.jsx
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = forwardRef(({ isOpen }, ref) => {
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-md z-30
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Menu</h2>
      </div>
      <ul className="p-4 space-y-4">
        <li className="cursor-pointer hover:text-blue-500"><button onClick={() => navigate("/dashboard")}>All Notes</button></li>
        <li className="cursor-pointer hover:text-blue-500"><button onClick={() => navigate("/pinned")}>Pinned</button></li>
        <li className="cursor-pointer hover:text-blue-500"><button onClick={() => navigate("/trash")}>Trash</button></li>
      </ul>
    </div>
  );
});

export default Sidebar;
