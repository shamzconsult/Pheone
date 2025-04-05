import React from 'react'
import ServiceHero from './_components/ServiceHero'
import Objectives from './_components/Objectives'
import Exploits from './_components/Exploits'
import FuturePlan from './_components/FuturePlan'
import HowWeWork from './_components/HowWeWork'
import Divider from '../home/_components/Divider'
import DonateSection from '../home/_components/DonationSection'
import GrowImage from './_components/GrowImage'

function page() {
  return (
    <div>
        <ServiceHero/>
        <Objectives/>
        <Exploits/>
        <FuturePlan/>
        <HowWeWork/>
        <Divider/>
        <DonateSection/>
        <GrowImage/>
    </div>
  )
}

export default page