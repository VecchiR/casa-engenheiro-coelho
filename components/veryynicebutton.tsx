import { motion, useMotionValue, useSpring } from 'framer-motion';
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface NiceButtonProps {
  text: string;
  hasIcon: boolean;
  invert: boolean;
}

export default function Veryynicebutton({ text, hasIcon, invert }: NiceButtonProps) {
  // Use motion values for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring physics for smoother circle movement
  const springX = useSpring(mouseX, { damping: 25, stiffness: 700 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 700 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="relative inline-block">
      <motion.a
        href="https://gsap.com/community/register/"
        className={`relative z-10 px-10 py-3  rounded-full   flex items-center gap-2   overflow-hidden hover:-translate-y-1 shadow-md hover:shadow-xl duration-300 ${invert? "bg-white text-primary hover:text-white " : "text-white bg-primary  border-primary "}`}
        target="_blank"
        rel="noopener"
        onMouseMove={handleMouseMove}
        whileHover="hover" // Use variants instead of state
      >
        <motion.div
          className={`absolute  rounded-full z-0 pointer-events-none bg-[#25D366]`}
          style={{
            top: springY,
            left: springX,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ width: 0, height: 0 }}
          variants={{
            hover: { width: 450, height: 450 },
            initial: { width: 0, height: 0 },
          }}
          transition={{
            duration: 0.2,
            ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smoother animation
          }}
        />
        <span className="relative flex items-center gap-2 z-20">
          {text}
          {hasIcon && <MessageCircle className="h-4 w-4" />}
        </span>
      </motion.a>
    </div>
  );
}
