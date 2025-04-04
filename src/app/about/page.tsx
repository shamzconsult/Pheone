import React from 'react'
import AboutHeroSection from './_components/AboutHeroSection'
import Operation from './_components/Operation'
// import Objectives from './_components/Objectives'
import OurObjectives from './_components/OurObjectives'

function page() {
  return (
    <div>
        <AboutHeroSection/>
        <Operation/>
        {/* <Objectives/> */}
        <OurObjectives/>
    </div>
  )
}

export default page