"use client"
import { LampContainer } from "@/components/ui/lamp";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../CSS/Home.css";
import { LayoutGridDemo } from "../../components/grid";
import {About} from '../../components/about'


export default function Home() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const top = aboutRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isVisible]);

  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -80 }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h1-edit bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Bring light <br /> to your future
        </motion.h1>
      </LampContainer>

      <div className="about-text mb-10" ref={aboutRef} >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.7 }}
          className="about-h2 font-medium"
        >
          A <span className='underlineani'>successful investor</span> is one who is able to outperform the market
          consistently. <br />
          The way to outperform the market is through superior insight and
          rigorous analysis. <br />
          I will not bother describing the intricacies of my investment
          strategy, <br />
          you are here to make money, this is <span className='underlineani'>not a course!</span>
        </motion.h2>
      </div>

      <div>
        <About/>
      </div>

      <div className="relative card-container">
        <LayoutGridDemo />
      </div>
     
      
    </div>
  );
}