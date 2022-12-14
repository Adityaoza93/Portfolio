import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="home my-4">
      
      <motion.div
        className="name"
        initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        Aditya <font color="yellow">Oza</font>
      </motion.div>
       
      <motion.div
        class="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <font>FullStack</font> Developer and <font>Technical Co-Head</font> at Computer Engineering Student Association
      </motion.div>
    </div>
  );
};

export default Home;
