// import { Sidebar } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion"; 

const Sidebarr = () => {
  const [active,setactive] = useState('editProfile');
  // function changestate(k){
  //   setactive(k);
  // } 
  const menuItems = [
    { id: 'editProfile', label: 'Edit Profile', icon: 'user' ,Link: '' },
    { id: 'yourListing', label: 'Your Listing', icon: 'clipboard', Link: 'listings' },
    { id: 'favorite', label: 'Favorite', icon: 'heart' ,Link: 'favorite' },
    { id: 'logOut', label: 'Log Out', icon: 'user' ,Link:'/' }
  ];
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'user':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        );
      case 'clipboard':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
        );
      case 'heart':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        );
    }
  };

  return (
     <AnimatePresence mode="wait">
    
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3}}
                >
    <div className="w-full max-w-md mx-auto">
      <nav className="flex flex-col space-y-4">

          <Link
          to={'/edit-property'}
            key={'editProfile'}
            href="#"
            className={`flex items-center px-6 py-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-blue-300' ${active=='editProfile' ? 'bg-blue-200' : ''}`}
            onClick={()=>setactive('editProfile')}
            >
            <span className="flex items-center justify-center w-8 h-8">
              {renderIcon('user')}
            </span>
            <span className="ml-6 text-lg font-medium">{'Edit Profile'}</span>
          </Link>
          <Link
          to={'/edit-property/listings'}
            key={'yourListing'}
            href="#"
            className={`flex items-center px-6 py-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-blue-300' ${active=='yourListing' ? 'bg-blue-200' : ''}`}
            onClick={()=>setactive('yourListing')}
            >
            <span className="flex items-center justify-center w-8 h-8">
              {renderIcon('clipboard')}
            </span>
            <span className="ml-6 text-lg font-medium">{'Your Listing'}</span>
          </Link>
          <Link
          to={'/edit-property/favorite'}
            key={'favorite'}
            href="#"
            className={`flex items-center px-6 py-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-blue-300' ${active=='favorite' ? 'bg-blue-200' : ''}`}
            onClick={()=>setactive('favorite')}
            >
            <span className="flex items-center justify-center w-8 h-8">
              {renderIcon('heart')}
            </span>
            <span className="ml-6 text-lg font-medium">{'Favorite'}</span>
          </Link>
          <Link
          to={'/'}
            key={'logOut'}
            href="#"
            className={`flex items-center px-6 py-4 rounded-full transition-colors duration-200 ease-in-out hover:bg-blue-300' ${active=='logOut' ? 'bg-blue-200' : ''}`}
             onClick={()=>setactive('logOut')}
            >
            <span className="flex items-center justify-center w-8 h-8">
              {renderIcon('user')}
            </span>
            <span className="ml-6 text-lg font-medium">{'Log Out'}</span>
          </Link>

      </nav>
    </div>
            </motion.div>
         </AnimatePresence>
  );
};

export default Sidebarr;