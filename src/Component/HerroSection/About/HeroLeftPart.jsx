import React from 'react'





function HeroLeftPart() {

  const handleDownloadResume = () => {

    const link = document.createElement('a');
    link.href = '../../pic/resume.pdf';
    link.download = 'resume.pdf';
    link.click();

  };


  return (
    <>
    <div className='w-full pb-36 pt-24 box-border pl-20  '>
    
        <div className=' flex flex-col gap-12 mt-20'>

            <h2 className='text-7xl font-bold'>Hello</h2>
            <h2 className='text-2xl'>Here's who I am & what I do</h2>

            <div className='w-full flex justify-start gap-8'>

            <button onClick={handleDownloadResume} className='bg-blue-600 text-white px-6 rounded-lg font-bold cursor-pointer'>RESUME </button>
            <button className='text-black border border-black px-6 rounded-lg font-bold cursor-pointer'> PROJECT </button>
               
            </div>
            
            <div className='w-44 sm:w-80'>
                <p className='mb-6'>I'm Abrar Khan. I have completed a CIT diploma in DAE from Government College of Technology in Side Area. I am a Frontend Developer with a strong command of HTML, CSS, JavaScript, and its frameworks. </p>

                <p>I have completed a 1-year Web Development Course from Suffah Institute. To download my resume, click on the Resume Button.</p>
            </div>  

        </div>

    </div>
    </>
  )
}

export default HeroLeftPart