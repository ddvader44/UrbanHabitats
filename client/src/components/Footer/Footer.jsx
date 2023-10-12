import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="f-left flexColStart">
                <img src="./logo.png" alt="" width={200}/>
                <span className='secondaryText'>
                Our vision is to create the perfect living space for each individual
                <br />
                tailored to their needs and aspirations.
                </span>
            </div>
            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>
                    1234 Elm Street Citytown, Stateville 56789 Countryland
                </span>
                <div className="flexCenter f-menu">
                    <span>Proprty</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer