


import React, { useState } from 'react';
import { ChevronUp, ChevronDown, WalletMinimal } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar, faS, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [arrow, setArrow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDropdown = () => {
    setArrow(!arrow);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex flex-col w-full items-center'>
      <div className='flex flex-row m-5 mx-9 w-[90%] justify-between items-center'>
        <div className="left flex flex-row items-center space-x-4 md:space-x-9">
         <Link to='/'>
         <p className='text-lg md:text-3xl font-bold'>
            <span className='text-[#FFA500]'>Filling</span>
            <span className='text-[#1D3C49]'>Future</span>
          </p>
         </Link>
          <div className='relative'>
            <h2 className='text-[#2B5A6E] flex flex-row cursor-pointer font-medium' onClick={handleDropdown}>
              Donate
              {!arrow ? <ChevronDown /> : <ChevronUp />}
            </h2>
            {arrow && (
              <div className='absolute top-full left-0 mt-2 w-48 shadow-lg rounded-md bg-white font-normal'>
                <ul className='flex flex-col'>
                  <Link to='/donate-Once'>
                  <li className='p-2 hover:bg-gray-100 cursor-pointer flex flex-row text-sm'>
                    <span className='mr-5 w-6 '><FontAwesomeIcon icon={faCommentsDollar} /></span> Donate once
                  </li>
                  </Link>
                 <Link to='/donate-monthly'>
                 <li className='p-2 hover:bg-gray-100 cursor-pointer flex flex-row text-sm'>
                    <span className='mr-4 w-7 '><WalletMinimal /></span>Donate monthly
                  </li>
                </Link>
                  <Link to='/subscription'>
                  <li className='p-2 hover:bg-gray-100 cursor-pointer flex flex-row text-sm'>
                    <span className='mr-6 w-5 '><FontAwesomeIcon icon={faS} /></span>Join spring
                  </li>
                  </Link>
                  <Link to='/sponsor'>
                  <li className='p-2 hover:bg-gray-100 cursor-pointer flex flex-row text-sm'>
                    <span className='mr-5 w-5'><FontAwesomeIcon icon={faShieldHalved} /></span>Become a sponsor
                  </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
           {!menuOpen? <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>: <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          }
          </button>
        </div>
        <div className="hidden lg:flex right text-[#2B5A6E] font-medium">
          <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8'>
            <Link to='/about'> <li className='text-xs md:text-lg'>About Us</li></Link>
            <Link to='/login'> <li className='text-xs md:text-lg'>Login</li></Link>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-row w-full items-center justify-center lg:hidden">
        
          <div className="text-[#2B5A6E] font-medium ">
            <ul className='flex flex-col space-y-2 '>
              <Link to='/about'><li className='text-xs md:text-lg'>About Us</li></Link>
              <Link to='/login'><li className='text-xs md:text-lg'>Login</li></Link>
            </ul>
          </div>
          <div>
        
         </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;





