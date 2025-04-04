import React from 'react'
import AboutHeroSection from './_components/AboutHeroSection'
import Operation from './_components/Operation'
import OurObjectives from './_components/OurObjectives'
import Divider from '../home/_components/Divider'
import Members from './_components/Members'
import LetConnect from './_components/LetConnect'

function page() {
  return (
    <div>
        <AboutHeroSection/>
        <Operation/>
        <OurObjectives/>
        <Divider/>
        <Members/>
        <LetConnect/>
    </div>
  )
}

export default page