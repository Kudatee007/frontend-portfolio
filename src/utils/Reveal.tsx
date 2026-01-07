import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: React.CSSProperties["width"];
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const overlayVariants: Variants = {
  hidden: { left: 0 },
  visible: { left: "100%" },
};

const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  const contentControls = useAnimation();
  const overlayControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      contentControls.start("visible");
      overlayControls.start("visible");
    }
  }, [isInView, contentControls, overlayControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={contentControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={overlayControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#0aff9d",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;