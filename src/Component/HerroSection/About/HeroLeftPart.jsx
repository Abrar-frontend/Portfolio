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
    <div className='w-full pb-36 pt-24 box-border pl-20'>
    
        <div className=' flex flex-col gap-12 mt-20'>

            <h2 className='text-7xl font-bold'>Hello</h2>
            <h2 className='text-2xl'>Here's who I am & what I do</h2>

            <div className='w-full flex justify-start gap-8'>

            <button onClick={handleDownloadResume} className='bg-blue-600 text-white px-6 rounded-lg font-bold cursor-pointer'>RESUME </button>
            <button className='text-black border border-black px-6 rounded-lg font-bold cursor-pointer'> PROJECT </button>
               
            </div>
            
            <div className=' w-80'>
                <p className='mb-6'>I'm Abrar khan. I have done CIT diploma in DAE from Goverment College of Technology in Side Area. I am Frontend Developer have Strong command in HTML, CSS, JAVASCRITS and It's frameWork </p>

                <p>I'am do Web-Development Course of 1 year from suffah insitute.You Download My Resume click on Resume Button</p>
            </div>  

        </div>

    </div>
    </>
  )
}

export default HeroLeftPart