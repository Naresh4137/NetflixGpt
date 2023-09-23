import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const  DropdownButton = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  const user = useSelector((store) => store.user);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  
  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
      >
        Profile
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              {user?.displayName}
            </a>
            <a
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900"
              role="menuitem"
              
            >
              Sign Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
