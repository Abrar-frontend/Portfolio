import React from 'react';
import '../Css Style/resume.css'
import Resume1 from '../Css Style/Resume1';
import Resume2 from '../Css Style/Resume2';

export default function Resume() {
  const College = {
    DatePassing  : '2021',
    Name : 'GCT College',
    Degree : 'CIT Deploma',
    Address : 'Side Area, Karachi',
    Paraghraph : 'In Gct College I have done Computer Information Technology Course of 3 year Deploma in DAE and Secure 66% and Successfully complete my 3 year Journoury in GCT College.',
    Paraghraph2 : 'After completed the diploma I take addmission in suffah institute in frontend and development of 1 year Course'
  }
  const School = {
    DatePassing  : '2017',
    Name : 'A.D.M School',
    Degree : 'Science',
    Address : 'Baldia town, Karachi',
    Paraghraph : 'In A.D.M School I have done matric and in matric I have secure 66% and successfully complete the matric',
    Paraghraph2 : 'In School I participant my program and have strong communication'
  }

  const Commpany = {
    DatePassing  : '2024',
    Name : 'Abdull Brothers',
    Degree : 'Oracle Programmer',
    Address : 'Rasheedabad',
    Paraghraph : `In there I Work on month on oracle and I left that because I feel soon that I am not enjoing oracle and also became lazy in my field that's why I left it`,
    Paraghraph2 : 'But during 1 month I learn alot of thing the use of JavaScript the logic which is use in there I can use this logic my web development too.'
  }

  return (
    <>
     <div className="Rescontainer" style = {{zIndex:'-15', position: 'relative'}}>
       

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

      <Resume1 college = {Commpany}/>
      {/* <Resume1 /> */}
      

      <h3 className='ResEdu'>Education </h3>
     
      <Resume1 college = {College}/>
      <Resume1 college = {School}/>

      <Resume2 />
      </div>




      </div>
    </>
  )
}
