import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
  initial: { opacity: 0, y: 64 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -64 }
};

function Transition({ children }) {
  const location = useLocation();
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start('enter');
  }, [location.pathname, controls]);

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate={controls}
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, ease: [0, 1.3, 0.7, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;