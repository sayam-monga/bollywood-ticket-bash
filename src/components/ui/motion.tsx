
import { 
  motion, 
  MotionProps, 
  AnimatePresence,
  useScroll,
  useTransform,
  useAnimation,
  useInView
} from "framer-motion";
import React, { useEffect, useRef } from "react";

// Fade-in animation wrapper
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  ...props 
}: MotionProps & { 
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Slide-in animation wrapper
export const SlideIn = ({ 
  children, 
  direction = "left", 
  delay = 0,
  duration = 0.5,
  ...props 
}: MotionProps & { 
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
}) => {
  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, ...directionMap[direction] }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale animation wrapper
export const ScaleIn = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  ...props 
}: MotionProps & { 
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Rotate animation wrapper
export const RotateIn = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  ...props 
}: MotionProps & { 
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: -10 }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scroll-triggered animation hook
export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return { ref, controls, isInView };
};

// Scroll-triggered animation wrapper
export const ScrollAnimation = ({ 
  children,
  variant = "fadeIn",
  ...props 
}: { 
  children: React.ReactNode;
  variant?: "fadeIn" | "slideUp" | "scale" | "stagger";
}) => {
  const { ref, controls, isInView } = useScrollAnimation();

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    },
    stagger: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Parallax effect hook
export const useParallax = (value: number) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, value]);
  return { y, scrollYProgress };
};

// Text reveal animation
export const RevealText = ({ 
  children,
  delay = 0, 
  ...props 
}: MotionProps & { 
  children: React.ReactNode;
  delay?: number;
}) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1 + delay,
        duration: 0.5
      }
    })
  };

  const splitText = React.Children.map(children, (child, i) => {
    if (typeof child === 'string') {
      return child.split('').map((char, index) => (
        <motion.span
          key={`${i}-${index}`}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    }
    return child;
  });

  return <span {...props}>{splitText}</span>;
};

export { motion, AnimatePresence };
