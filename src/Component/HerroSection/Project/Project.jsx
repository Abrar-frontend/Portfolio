import React from 'react';
import '../Css Style/Project.css';
import Picture1 from '../../pic/pic1.png';
import Picture2 from '../../pic/Daraz.png';
import Project1 from './project1';

console.log(Picture2)

const Guess = {
  heading : 'GUESSING THE NUMBER',
  role : 'Frontend Developer',
  assDes : 'This project involves guessing the correct number. Once the game starts, the user needs to guess the correct number. The special thing about this project is that I developed the code at a professional level.',
  pic : Picture1
}

const Daraz = {
  role : 'Frontend Developer',
  assDes : 'This is Daraz clone. Inspired by the popular e-commerce platform, this project showcases my skills in web development and UI/UX design. In this project I have use HTML , CSS, TAILWINDCSS, VITE , and EXPREESJS and for deployment purpose use NETLIFY and VERCEL',
  heading : 'Api Integration',
  pic : Picture2
}
export default function Project( ) {

  return (
    <>

<div className="parentCont">
       

       <div className="ResHeading">
       <div className='ResBox'> </div> <h2> Projects </h2>
       </div>

       <div className="ProjectPara">
        <p>This page is made by Abrar khan and In this section I will show my project which is made by my self. I will update this pages again and again when ever I make project I will update this page for now I make this project as my first project so that is my first project consider.</p>
    </div>
       
<Project1 projDetail = {Guess}/>
<Project1 projDetail = {Daraz}/>

</div>


    </>
  )
}
