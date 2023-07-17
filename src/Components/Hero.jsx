import React from 'react'
import bgcover from '../Assests/bgcover.jpg'

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img className='top-0 left-0 w-full h-screen object-cover' src={bgcover}/>
    </div>
  )
}

export default Hero
