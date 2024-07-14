import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import './Hero.css'
import underline_img from '../../assets/images/Underline.png'
import down_arrow from '../../assets/images/homepage/Down Arrow.png'

const Hero = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      opacity: 0,
    },
    hiddenLeft: {
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0,
      },
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: 10 },
    },
    hover: {
      transition: { duration: 0.2 },
    },
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="carousel hero">
      <div className="container hero-container container-no-padding">
        <motion.div className="header-content">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "linear" }}
          >
            Welcome to
          </motion.h2>
          <motion.h1
            className="company-name"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1, ease: "linear", type: "spring", bounce: 0.4 }}
          >
            KIGOMA
          </motion.h1>
          <div className="line-wrapper">
            <img src={underline_img} alt="" />
          </div>
          <h3>ENJOY YOUR STAY</h3>
          <Link className="down_arrow" to="#popular">
            <img src={down_arrow} alt="" />
          </Link>
        </motion.div>

        <div className="info">
          Covid-19 Information
        </div>

        <div className="carousel-images">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
            />
          </AnimatePresence>
        </div>

        <div className="carousel-indicator">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`dot ${currentIndex === index ? "isactive" : ""}`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
