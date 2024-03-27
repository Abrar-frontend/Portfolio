import React from 'react';
import './Resume2.css'

export default function Resume2() {
  return (
    <>
        <div className="Resume2" style = {{zIndex:'-10'}}>
         
         
         <h3> Proffesional Skillset </h3>

         <div className='partenBox'>
 
          {/*<----- ONE------> */}
         <div className="parentChil">
         <div className='smallbox'> </div> <p> Entrepreneurial Mindset </p>
         </div>
          
         <div className="parentChil">
         <div className='smallbox'> </div> <p> Go-to-Market Planning </p>
         </div>
          
           
         </div>
         
         {/*<----- TWO------> */}

         <div className='partenBox'>


        <div className="parentChil">
        <div className='smallbox'> </div> <p> Entrepreneurial Mindset </p>
        </div>

        <div className="parentChil">
        <div className='smallbox'> </div> <p> Go-to-Market Planning </p>
        </div>


          </div>
          
          {/*<---- Second Parent start  ---->  */}
          <h3> Language </h3>

<div className='partenBox'>

 {/*<----- ONE------> */}
<div className="parentChil">
<div className='smallbox'> </div> <p> Urdu (native) </p>
</div>
 
<div className="parentChil">
<div className='smallbox'> </div> <p> English (proficient) </p>
</div>
 
</div>




        </div>

    </>

  )
}
