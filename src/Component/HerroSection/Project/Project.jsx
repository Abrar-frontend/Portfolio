import React from 'react';
import Picture1 from '../../pic/pic1.png'
import '../Css Style/Project.css';

export default function Project() {
  return (
    <>

<div className="parentCont">
       

       <div className="ResHeading">
       <div className='ResBox'> </div> <h2> Project </h2>
       </div>

       <div className="ProjectPara">
        <p> This page is made by Abrar khan and In this section I will show my project which is made by my self. I will update this pages again and again when ever I make project I will update this page for now I make this project as my first project so that is my first project consider.</p>
       </div>

       <div className="ProjectCard">

        <div className="Cardpara">
            <div>
            <h4> GUESSING THE NO </h4>
            <p style={{fontWeight:'500px'}}>Frontend Developer</p>
            </div>

            <p style={{textAlign:'left',marginTop:'8%',fontSize:'20px'}}>This project involves guessing the correct number. Once the game starts, the user needs to guess the correct number. The special thing about this project is that I developed the code at a professional level. </p>
        </div>

        <div className="CardPic">
         <div style={{backgroundImage:`URL(${Picture1})`,backgroundRepeat: 'no-repeat',backgroundSize:'contain' , backgroundPosition: 'left' ,width:'100%',height:'100%'}}>

         </div>
        </div>
       
       </div>


</div>


    </>
  )
}
