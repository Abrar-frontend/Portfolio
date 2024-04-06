import React from 'react';


function Project1({ projDetail }) {

  return (
    <>
    
  

       <div className="ProjectCard">

        <div className="Cardpara">
            <div>
            <h4> {projDetail.heading} </h4>
            <p style={{fontWeight:'500px'}}> {projDetail.role} </p>
            </div>

            <p style={{textAlign:'left',marginTop:'8%',fontSize:'20px'}}> { projDetail.assDes} </p>
        </div>

        <div className="CardPic">
         <div style={{backgroundImage:`URL(${projDetail.pic})`,backgroundRepeat: 'no-repeat',backgroundSize:'contain' , backgroundPosition: 'left' ,width:'100%',height:'100%'}}>

         </div>
        </div>
       
       </div>

    </>
  )
}

export default Project1