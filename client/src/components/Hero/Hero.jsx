import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side  */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{
                y: "2rem",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Where <br />
              City Living <br />
              Thrives
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">
              Your Perfect Property Match Made Easy
            </span>
            <span className="secondaryText">Seamless Residence Hunting</span>
          </div>
          <SearchBar />
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={30} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{
              x: "7rem",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
