import { ReactNode, useEffect, useRef, useState } from 'react';

import { useScroll, useSpring, motion, useTransform } from 'framer-motion';

type SmoothScrollProps = {
  children: ReactNode;
};
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [contentRef]);

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />

      <motion.div
        className="fixed top-0 flex w-screen flex-col"
        style={{ y }}
        ref={contentRef}
      >
        {children}
      </motion.div>
    </>
  );
}
