import React from 'react';
import '../Css Style/resume.css'
import Resume1 from '../Css Style/Resume1';
import Resume2 from '../Css Style/Resume2';

export default function Resume() {
  return (
    <>
     <div className="Rescontainer">
       

      <div className="ResHeading">
      <div className='ResBox sm:w-44'> </div> <h2> Resume </h2>
      </div>
                      {/* -----------  */}
      <div className="ResSecDiv">
      <h2 className='SecDivH2  sm:text-3xl'> Experence </h2>
      <button className='SecDivBtn btn btn-rounded rounded-pill sm:w-36 sm:h-10'> Download CV </button>
      </div>
                        {/* -----------  */}
                        
      <div className="ResBoxes">

      <Resume1 />
      <Resume1 />
      

      <h3 className='ResEdu'>Education </h3>
     
      <Resume1 />
      <Resume1 />

      <Resume2 />
      </div>




      </div>
    </>
  )
}
