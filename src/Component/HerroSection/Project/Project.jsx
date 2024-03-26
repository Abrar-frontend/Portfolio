import React from 'react';
import '../Css Style/Project.css';
import Picture1 from '../../pic/pic1.jpg'

export default function Project() {
  return (
    <>

<div className="Rescontainer">
       

       <div className="ResHeading">
       <div className='ResBox'> </div> <h2> Project </h2>
       </div>

       <div className="ProjectPara">
        <p> This page is made by Abrar khan and In this section I will show my project which is made by my self. I will update this pages again and again when ever I make project I will update this page for now I make this project as my first project so that is my first project consider.</p>
       </div>

       <div className="ProjectCard">

        <div className="Cardpara">
            <div>
            <h4> Project Name 01 </h4>
            <p style={{fontWeight:'500px'}}>Role Title</p>
            </div>

            <p style={{textAlign:'left',marginTop:'8%',fontSize:'20px'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium odio consequuntur, consequatur dolore delectus qui accusamus voluptates laborum, dolorum nemo earum recusandae magnam, tenetur nihil aliquam deleniti minus iste!</p>
        </div>

        <div className="CardPic">
         <div style={{backgroundImage:`URL(${Picture1})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover',width:'100%',height:'100%'}}>

         </div>
        </div>
       
       </div>


</div>


    </>
  )
}
