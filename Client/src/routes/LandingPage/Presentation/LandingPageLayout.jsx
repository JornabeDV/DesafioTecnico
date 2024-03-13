import React from 'react'

const LandingPageLayout = ({ children }) => {
  return (
    <div className='text-white w-full h-full flex flex-col justify-center items-center scroll-smooth'>
      {children}
    </div>
  )
}
export default LandingPageLayout
