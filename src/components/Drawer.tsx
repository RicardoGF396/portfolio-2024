import { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

type DrawerProps = {
  showOverlay: boolean;
  showContainer: boolean;
  handleClose: () => void;
};

export default function Drawer({
  showContainer,
  showOverlay,
  handleClose,
}: DrawerProps) {
  useEffect(() => {
    if (showContainer) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [showContainer, showOverlay]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] overflow-y-auto bg-black/10"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            initial={{ marginTop: 220 }}
            animate={{ marginTop: 96 }}
            transition={{ duration: 0.6 }}
            className="mx-auto my-24 w-full max-w-screen-lg rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
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
            {/* Resto del contenido del Drawer */}
            <p className="text-lg font-bold">Project Name</p>
            <p className="w-full max-w-[520px] text-base text-[#8B8B8B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-4">
              <div className="flex gap-4">
                <p className="rounded-lg bg-[#F6F7F8] px-3 py-1.5 text-sm font-medium text-[#8B8B8B]">
                  Technology 1
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-y-4">
              <img
                alt="img-1"
                src="/api/placeholder/1024/520"
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover"
              />
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <img
                  alt="img-2"
                  src="/api/placeholder/500/520"
                  className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover md:w-1/2"
                />
                <img
                  alt="img-3"
                  src="/api/placeholder/500/520"
                  className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover md:w-1/2"
                />
              </div>
              <div>
                <p className="font-bold">More information</p>
                <p className="w-full max-w-[520px] text-base text-[#8B8B8B]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <img
                alt="img-4"
                src="/api/placeholder/1024/520"
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover"
              />
              <img
                alt="img-5"
                src="/api/placeholder/1024/520"
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover"
              />
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <img
                  alt="img-6"
                  src="/api/placeholder/500/520"
                  className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover md:w-1/2"
                />
                <img
                  alt="img-7"
                  src="/api/placeholder/500/520"
                  className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover md:w-1/2"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
