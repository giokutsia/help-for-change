import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const NavBar = () => {
 const [nav, setnav] = useState(true)
 const handleNav = () => {
  setnav(!nav)
 }

    return (
      <div className='flex bg-primary justify-between items-center h-[40px] max-w-[1240] mx-auto px-4 text-white font-pac'>
        <Link to='/'><h1 className="w-full m-4">HELPFORCHANGE</h1></Link>
        <Link to="/" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                 </svg> 
        </Link>
        <ul className='hidden md:flex  '>
          <Link to='/'>
            <li className='p-4'>Home</li>
          </Link>
          <Link to='about'>
            <li className='p-4'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='p-4'>Contact</li>
          </Link>
          
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
          
        </div>
        <div className={!nav ? "fixed left-0 h-full top-0 w-[50%] border-r bg-[#13A760] transition ease-in-out duration-500" : "hidden"}>
          <Link to='/'><h1 className="w-full m-4">HELPFORCHANGE</h1></Link>
          <ul className='uppercase p-4'>
            <Link to='/'>
              <li className='p-4 border-b border-white'>Home</li>
            </Link>
            <Link to='about'>
              <li className='p-4 border-b'>About</li>
            </Link>
            <Link to='/contact'>
              <li className='p-4'>Contact</li>
            </Link>
            
          </ul>
        </div>
      </div>
    
    )
}
export default NavBar