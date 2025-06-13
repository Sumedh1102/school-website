import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

   const navItems = [
  { path: "/", link: "Home" },
  { path: "/about", link: "About" },
  { path: "/events", link: "Team" },
  { path: "/admission", link: "Blog" },
  { path: "/academics", link: "Gallery" },
   { path: "/contact", link: "Contact" },
];
    
    return (
        
            <header className='bg-[#EAE4D5] text-black top-0 right-0 left-0 h-[75px] shadow-3xl rounded-b-3xl'>
                <nav className='px-4 py-4 max-w-7xl mx-auto h-auto flex justify-between items-center pt-6'>
                    <a href="/" className='text-xl font-medium text-gray-800 font-domine'>
                        Starlight Academy Portal </a>
                    {/* Nav items for larger devices */}
                    <ul className='md:flex gap-8 text-sm hidden'>
                        {navItems.map(({ path, link }) => (
                            <li key={path} className='text-gray-800 font-medium font-domine text-base'>
                                <NavLink 
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-gray-900"
                                            : isPending
                                            ? "pending"
                                            : "hover:text-gray-500"
                                    }
                                    to={path}
                                >
                                    {link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    
                   

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='cursor-pointer text-gray-700 p-2 rounded-md hover:bg-[#dbd5c6] transition-colors'>
                            {
                                isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                            }
                        </button>
                    </div>
                </nav>

                {/* Menu Items for Mobile */}
                <div  className={`md:hidden fixed top-[75px] left-0 w-full bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"
        }`}>
                    <ul className="space-y-0 divide-y divide-gray-100">
                        {navItems.map(({ path, link }) => (
                            <li key={path} className='text-gray-800 font-medium font-inter block py-4 px-6 transition-colors hover:bg-gray-50'>
                                <NavLink 
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        isActive ? "text-gray-900 bg-gray-50 border-l-4 border-gray-800" : "hover:text-gray-500"
                                    }
                                    to={path}
                                    
                                >
                                    {link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                 {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
            </header>
       
    )
}

export default Navbar