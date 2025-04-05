import React from 'react'
import ServiceHero from './_components/ServiceHero'
import Objectives from './_components/Objectives'
import Exploits from './_components/Exploits'
import FuturePlan from './_components/FuturePlan'
import HowWeWork from './_components/HowWeWork'

function page() {
  return (
    <div>
        <ServiceHero/>
        <Objectives/>
        <Exploits/>
        <FuturePlan/>
        <HowWeWork/>
    </div>
  )
}

export default page