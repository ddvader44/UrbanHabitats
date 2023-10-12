import React from 'react'
import './GetStarted.css'; 
const GetStarted = () => {
  return (
    <section id="started" className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Explore UrbanHabitats</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from
                    <br />
                    Find your residence soon
                </span>
                <button className="button">
                    <a href="mailto:saumitrapathak11@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted