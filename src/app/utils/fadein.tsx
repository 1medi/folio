import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?:string;
}
const FadeIn = ({ children, className }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Detects when it's in viewport
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isInView) {
      setIsVisible(false); // Triggers exit animation when out of view
    } else {
      setIsVisible(true);
    }
  }, [isInView]);
  
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isVisible ? "visible" : "exit"}
    transition={{ duration: 0.3 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
      exit: { opacity: 0, scale: 0.8 }, // Custom exit animation
    }}
    className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
