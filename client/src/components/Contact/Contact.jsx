import React from 'react'
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import './Contact.css';
import { HiChat } from 'react-icons/hi';
const Contact = () => {
  return (
    <section id="contact" className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side  */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>Empowering your journey with exceptional service and the belief that a quality living space enhances your life.</span>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} /> 
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>242 135 522 23</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Us
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} /> 
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>242 135 522 23</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat With Us
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} /> 
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>242 135 522 23</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Video Call Now
                            </div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChat size={25} /> 
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Email</span>
                                    <span className='secondaryText'>talk@uh.com</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Email Us
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side  */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./r3.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact