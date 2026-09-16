import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps } from "framer-motion";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
}

/**
 * Revele son contenu a l'entree dans le viewport.
 *
 * Deux garde-fous : l'animation ne se joue qu'une fois (le contenu ne
 * redevient jamais invisible si l'on remonte la page), et elle est
 * neutralisee quand le systeme demande des animations reduites.
 */
export default function MotionWrapper({
  children,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
