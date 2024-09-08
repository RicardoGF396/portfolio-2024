import { useState, useEffect } from 'react';

import HeaderLink from '@components/Header/HeaderLink';
import { AnimatePresence, motion } from 'framer-motion';

type ContactDrawerProps = {
  showOverlay: boolean;
  showContainer: boolean;
  handleClose: () => void;
};

export default function ContactDrawer({
  showOverlay,
  showContainer,
  handleClose,
}: ContactDrawerProps) {
  const [currentTime, setCurrentTime] = useState('');

  const updateCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    setCurrentTime(formattedTime);
  };

  useEffect(() => {
    updateCurrentTime();
    const timer = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-black"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContainer && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              duration: 0.5,
            }}
            className="fixed inset-x-0 bottom-0 z-[1000] mx-auto h-[342px] w-[764px] rounded-t-3xl border border-gray-200 bg-white pl-12 pr-6 pt-4"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-full bg-[#F4F4F4] px-4 py-1 font-medium text-[#8D8D8D] transition-all hover:bg-[#0F0F0F] hover:text-white"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
            <p className="font-medium text-[#8B8B8B]">Say hi:</p>
            <a
              href="mailto:ricardogf396@gmail.com"
              className="text-3xl font-bold transition-all hover:text-[#E16C01]"
            >
              ricardogf396@gmail.com
            </a>
            <div className="mt-10 flex w-[600px] justify-between">
              <div className="flex flex-col gap-y-4">
                <HeaderLink
                  name="WhatsApp"
                  icon="whatsapp"
                  link="https://wa.me/524774122683"
                  cssClass="filter_green"
                />
                <HeaderLink
                  name="Telegram"
                  icon="telegram"
                  link="https://t.me/ricardo_gf_396"
                  cssClass="filter_blue"
                />
              </div>
              <div>
                <p className="text-[#8B8B8B]">León, Gto. México</p>
                <p className="font-medium">{currentTime} (GMT -06:00)</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
