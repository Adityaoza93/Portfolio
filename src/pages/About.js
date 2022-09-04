import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            A curious person who loves to know "How it works?"."After discovering my passion for web development,I worked on many web dev project and hired myself out as a freelancer.I'am looking forward to bringing that passion to a part-time role".
            </p>
            <p>
              I am currently pursuing Computer Engineering 
              at Vidyalankar Institute of Technology,Wadala.I am in my 3rd Year.
              My domain of intrest is in Web Development,IOT and Cyber Security.
              Currently I am working on Industry project in IOT domain.I am Technical
              Co-Head at Computer Engineering Students Association VIT.I am also working 
              as Campus Ambassador at BigInnovation. 

            </p>
            <h2>Technical Skills</h2>
            <p>
              Python,Java,C,C++,MERN STACK
            </p>
           
            <h2>Hobbies</h2>
            <p>
             Cycling,Reading books and in my leisure time I love to watch anime.
            </p>
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;
