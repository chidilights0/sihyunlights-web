import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
  initial: { opacity: 0, scale: 1.05 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0, 0.8, 0.4, 1] }
  },
  exit: {
    opacity: 0,
    y: 32,
    transition: { duration: 0.2, ease: [0.5, 0, 0.2, 1] }
  }
};

function Transition({ children }) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      style={{ transformOrigin: 'top center' }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;