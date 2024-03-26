import React from 'react';
import { NavLink } from 'react-router-dom';

function Responsive({fun}) {

const ColorObj = {
  backgroundColor : '#F4ECE6'
}

  return (
    <div id='targetRes' className='hidden fixed inset-0 z-999'style = {ColorObj}>
      
      <div className=' w-full h-full absolute top-0 flex flex-col gap-14 items-end pe-20 pt-20'>

        <p className = 'text-5xl hover:cursor-pointer me-20' onClick={() => {fun()}}> X </p>

        <ul className='flex gap-10 flex-col mt-0 w-full items-center'>

        <NavLink to = '/'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}>  

                <li className='hover:cursor-pointer font-bold text-3xl'> ABOUT ME </li> 
              </NavLink>

              <NavLink to = '/resume'
                 className={({isActive}) =>
                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}> 
                <li className='hover:cursor-pointer font-bold text-3xl'> RESUME </li>
              </NavLink>

              <NavLink to = '/project'
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}> 
                <li className='hover:cursor-pointer font-bold text-3xl'> PROJECT </li>
              </NavLink>

              <NavLink to = '/contact'
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-600" : "text-black"}`}> 
                <li className='hover:cursor-pointer font-bold text-3xl'> CONTACT </li>
              </NavLink>


        </ul>

      </div>

    </div>
  );
}

export default Responsive;
