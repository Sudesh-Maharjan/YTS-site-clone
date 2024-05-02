import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
const Header = () => {
  return (
    <>
      

<nav className=" border-gray-200 dark:bg-gray-900 dark:border-gray-700 bg-black text-white sticky top-0 z-40">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <div className="flex gap-1">
    <a href="/" className="flex items-center px-5 space-x-3 rtl:space-x-reverse">
        <img src="https://yts.mx/assets/images/website/logo-YTS.svg" className="h-8" alt="YTS" />
    </a>

        <span className="text-start text-xl text-gray-400 whitespace-nowrap dark:text-white">HD movies at the smallest file size</span>
        </div>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col text-gray-400 text-sm  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/" className="block py-2 px- rounded md:bg-transparent md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent hover:text-white hover:transition duration-1000" aria-current="page">Home</a>
        </li>
 
        <li>
          <a href="/browseMovies" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-white hover:transition duration-1000">Browse Movies</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-white hover:transition duration-1000"><FontAwesomeIcon icon={faMoon} /> Dark Mode</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
