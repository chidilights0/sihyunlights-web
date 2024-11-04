import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
  initial: { opacity: 0, y: 64 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8 }
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
      transition={{ duration: 0.8, ease: [0, 1, 0.7, 1] }}
      style={{ transformOrigin: 'top center' }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;