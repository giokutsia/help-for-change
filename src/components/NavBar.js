import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
    <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-pac">
              HELPFORCHANGE
            </Link>
          </div>
            <Link to="/" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg> 
            </Link>

          <div className="md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                exact
                activeClassName="text-white"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="text-white"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="text-white"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </NavLink>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}
export default NavBar