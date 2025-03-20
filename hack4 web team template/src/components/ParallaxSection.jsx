import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxSection({ speed = -0.2, children }) {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div style={{ translateY }} className="absolute inset-0 z-0">
      {children}
    </motion.div>
  );
}

export default ParallaxSection;
