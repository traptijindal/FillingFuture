import React from 'react'
import SponsorHeader from '../Components/SponsorHeader'
import FoodResponsive from '../Components/FoodResponsive'
import Sponsor_Column from '../Components/Sponsor_Column'
import Sponsor_Food from '../Components/Sponsor_Food'

const Sponsor = () => {
  return (
    <div className='overflow-hidden'>
      <SponsorHeader/>
      <Sponsor_Food/>
      <FoodResponsive/>
      <Sponsor_Column/>
    </div>
  )
}

export default Sponsor
