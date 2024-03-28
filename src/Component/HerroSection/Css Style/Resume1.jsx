import React from 'react';
import './Resume1.css';

export default function Resume1({college}) {
  return (
    <>

    <div className="remExp border border-black   md:w-full">
    
    
    <div className="EduLeft  ">

    <h3 style={{color:'blue',fontWeight:'bold'}}> {college.DatePassing} </h3>
    <p className='sm:mt-6 md:mt-4'> {college.Name} </p>
    <p className='sm:mt-6 md:mt-4'> {college.Degree} </p>
    <p className='sm:mt-6 md:mt-4'> {college.Address} </p>

    </div>


    <div className="EduRight">

     <p>{college.Paraghraph} </p>

     <p style={{marginTop:'2%'}}>{college.Paraghraph2} </p>
    </div>


    </div>
   
    
    </>
  )
}
