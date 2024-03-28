import React from 'react'
import HeroRightPart from './HeroRightPart'
import HeroLeftPart from './HeroLeftPart'

function Hero() {
  return (
    <>
    <div className='w-full flex lg:flex-row flex-col' style = {{zIndex : '-20', position : 'relative'}} >
   

    <HeroRightPart />
    <HeroLeftPart/>
    </div>
    </>
  )
}

export default Hero