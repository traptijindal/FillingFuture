import React from 'react'
import Header from '../Components/Header'
import Work from '../Components/Work'
import DonateNow from '../Components/DonateNow'
import Spring from '../Components/Subscription'
import SmallDonation from '../Components/SmallDonation'
import Sponsor from '../Components/Sponsor'

const Home = () => {
  return (
    <div>
      <Header/>
      <Work/>
      <DonateNow/>
      <Spring/>
      <SmallDonation/>
      <Sponsor/>
    </div>
  )
}

export default Home
