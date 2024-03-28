import React from 'react'
import Responsive from './Responsive'
import { NavLink } from 'react-router-dom'

function Navbar() {

  function ColorChag(){
    document.querySelector('#targetRes').classList.toggle('hidden')
    console.log('hello')
  }
  return (
    <>
    
    <div className="w-100 h-20 flex items-center justify-between bg-slate-50 px-6 md:px-10 relative">

        <div className="flex gap-4 items-center z-0">
    {/*  dotted div */}
            <div className='bg-blue-800 w-4 h-4 sm:block hidden'>
            </div>

            <div className=' flex gap-2 font-semibold flex-col sm:flex-row'>

         
            <h2 className='font-bold  sm:text-2xl md:text-3xl cusClass'>Abrar khan</h2>
            <h4 className=' text-2xl mt-1'> / Frontend Developer</h4>
          

            </div>

        </div>


        <div className="hidden lg:block">

            <ul className='flex gap-10 '>
              
              <NavLink to = '/'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}>  

                <li className='hover:cursor-pointer'> ABOUT ME </li> 
              </NavLink>

              <NavLink to = '/resume'
                 className={({isActive}) =>
                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}> 
                <li className='hover:cursor-pointer'> RESUME </li>
              </NavLink>

              <NavLink to = '/project'
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}> 
                <li className='hover:cursor-pointer'> PROJECT </li>
              </NavLink>

              <NavLink to = '/contact'
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}> 
                <li className='hover:cursor-pointer'> CONTACT </li>
              </NavLink>

            </ul>

        </div>

        <div className="text-3xl font-extrabold block lg:hidden ">
        <i className="fa-solid fa-bars" onClick={ColorChag}></i>
        </div>

    </div>
    
    <Responsive fun = {ColorChag}/>
    </>
  )
}

export default Navbar