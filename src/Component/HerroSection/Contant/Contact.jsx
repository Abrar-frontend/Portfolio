import React from 'react';
import '../Css Style/resume.css'
import '../Css Style/Contact.css'

// let inputFeild = {
// border: 'none',
// borderBottom : '2px solid',
// width : '18vw',
// outline : 'none'
// }

let inputFeild2 = {
  border: 'none',
  borderBottom : '2px solid',
  width : '100%',
  outline : 'none'
  }

let inputOutDiv = {
display : 'flex',
flexDirection : 'column',
marginLeft : '2%',
marginRight : '2%'
}


export default function Contact() {
  return (
    <>
      <div className="Rescontainer">
       

       <div className="ResHeading">
       <div className='ResBox'> </div> <h2> Let's talk </h2>
       </div>

       <div className="contactBody">

            <div className="firstField">

                <div >
                <label > First Name </label>
                <input type="text" className='inputField'/>
                </div>

                <div style={inputOutDiv}>
                <label > Last Name </label>
                <input type="text" className='inputField'/>
                </div>
            </div>

            <div style={inputOutDiv}>
              <label> Email </label>
              <input type="text" style={inputFeild2}/>
            </div>

            <div style={inputOutDiv}>
              <label> Subject </label>
              <input type="text" style={inputFeild2}/>
            </div>

            <div style={inputOutDiv}>
              <label> Message </label>
              <textarea name="" id="" cols="20" rows="5" style={inputFeild2}>

              </textarea>
              </div>

                <div  style = {{
                  // border : '2px solid',
                  display : 'flex',
                  alignItems : 'start',
                  marginLeft : '2%',
                  }}>
                    <button className='custom-button'> send </button>
                </div>

       </div>


       </div>

    </>
  )
}
