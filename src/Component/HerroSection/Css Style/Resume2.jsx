import React from 'react';
import './Resume2.css'

export default function Resume2() {
  return (
    <>
        <div className="Resume2" style = {{zIndex:'-10',overflow:'hidden'}}>
         
         
         <h3> Proffesional Skillset </h3>

         <div className='partenBox'>
 
          {/*<----- ONE------> */}
         <div className="parentChil">
         <div className='smallbox'> </div> <p> HTML LANGUAGE </p>
         </div>
          
         <div className="parentChil">
         <div className='smallbox'> </div> <p> CASCADING STYLE SHEET </p>
         </div>
          
           
         </div>
         
         {/*<----- TWO------> */}

         <div className='partenBox'>


        <div className="parentChil">
        <div className='smallbox'> </div> <p> JAVASCRIPT LANGUAGE</p>
        </div>

        <div className="parentChil">
        <div className='smallbox'> </div> <p>  LIBRARIES & FRAMEWORKS </p>
        </div>


          </div>
          
          {/*<---- Second Parent start  ---->  */}
          <h3> Language </h3>

<div className='partenBox'>

 {/*<----- ONE------> */}
<div className="parentChil">
<div className='smallbox'> </div> <p> Urdu (Native) </p>
</div>
 
<div className="parentChil">
<div className='smallbox'> </div> <p> English (Proficient) </p>
</div>
 
</div>




        </div>

    </>

  )
}
