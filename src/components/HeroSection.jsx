import React from 'react'
import './herosection.css'

function HeroSection() {
  return (

    <div className='herosection'>

        <div className="hero-info">

        <div className="hero-lines">

        <h2>From <span>Match to Marriage</span></h2>
        <h2> We’re With You Every Step</h2>

        <div className="hero-text">

        <p>Welcome,where your love story begins and your wedding dreams come true. Our</p>
        <p>platform connects you with compatible matches and provides everything you need</p>
        <p>for a perfect wedding, all in one place.</p>

        </div>

        </div>

          <div className="hero-img">

            <img src='images/nikah1.jpeg'></img>

          </div>

        </div>

        <div className="hero-btn"><button>View Profile</button></div>

    </div>

  )
}

export default HeroSection
