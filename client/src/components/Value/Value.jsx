import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  const [classNames, setClassNames] = useState(Array(data.length).fill('collapsed'));

  const handleAccordionClick = (index) => {
    setClassNames((prevClassNames) =>
      prevClassNames.map((className, i) => (i === index ? (className === 'collapsed' ? 'expanded' : 'collapsed') : className))
    );
  };

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./r1.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Guiding Tenets</span>
          <span className='primaryText'>Customer-Centric Approach</span>
          <span className='secondaryText'>
            We're Always Here to Assist with Top-notch Services
            <br />
            Enhancing Lives through Exceptional Living Spaces
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${classNames[i]}`}
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter  accordionButton' onClick={() => handleAccordionClick(i)}>
                    <div className="flexCenter icon">
                      {item.icon}
                    </div>
                    <span className="primaryText">
                      {item.heading}
                    </span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="secondaryText">
                    {item.detail}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  )
}

export default Value;