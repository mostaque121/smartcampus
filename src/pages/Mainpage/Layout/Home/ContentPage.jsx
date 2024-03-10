import { AnimatePresence, motion } from "framer-motion";
import "./contentpage.css";

const Carousel = () => {
  const variants = {
    initial: { y: "-100%", opacity: 0 },
    enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="content-page"
        key="layout"
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="hello">Hi</div>
        <div className="hello">Hi</div>
        <div className="hello">Hi</div>
        <div className="hello">Hi</div>
        <div className="hello">Hi</div>
        <div className="hello">Hi</div>
        <div className="hello">Hi</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;
