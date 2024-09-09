import { useState } from 'react';

import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import ContactDrawer from './Contact/ContactDrawer';

export default function Header() {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);
  const [showContainer, setShowContainer] = useState(false);

  const handleContactClick = () => {
    setShowOverlay(true);
    setShowContainer(true);
  };

  const handleCloseContact = () => {
    setShowOverlay(false);
    setShowContainer(false);
  };

  return (
    <motion.div
      initial={{ paddingTop: 20, opacity: 0 }}
      animate={{ paddingTop: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className="fixed top-4 z-[100] flex h-14 w-full max-w-7xl justify-between"
    >
      <div>
        <p className="font-medium">Ricardo González Flores</p>
        <p className="text-sm font-medium text-[#8D8D8D]">
          Software Engineer & Designer
        </p>
      </div>

      <div className="flex h-11 w-72 items-center justify-center gap-4 rounded-full border border-gray-200 bg-white/50 bg-clip-padding backdrop-blur-lg">
        <a
          className={twMerge(
            'px-4 py-1 rounded-full font-medium',
            location.pathname === '/'
              ? 'bg-[#E4E4E4] font-bold'
              : 'text-[#8D8D8D]',
          )}
          href="/"
        >
          Home
        </a>
        <a
          className={twMerge(
            'px-4 py-1 rounded-full font-medium',
            location.pathname === '/about'
              ? 'bg-[#E4E4E4] font-bold'
              : 'text-[#8D8D8D]',
          )}
          href="/about"
        >
          About
        </a>
        <button
          className="rounded-full px-4 py-1 font-medium text-[#8D8D8D] hover:bg-[#E4E4E4]"
          type="button"
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>

      <div />
      <ContactDrawer
        showOverlay={showOverlay}
        showContainer={showContainer}
        handleClose={handleCloseContact}
      />
    </motion.div>
  );
}
