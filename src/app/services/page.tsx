import React from 'react'
import ServiceHero from './_components/ServiceHero'
import Objectives from './_components/Objectives'
import Exploits from './_components/Exploits'

function page() {
  return (
    <div>
        <ServiceHero/>
        <Objectives/>
        <Exploits/>
    </div>
  )
}

export default page