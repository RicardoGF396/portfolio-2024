import { useEffect } from 'react';

import { ISelectWorkDetail } from '@interfaces/SelectWork';
import { AnimatePresence, motion } from 'framer-motion';

type DrawerProps = {
  showOverlay: boolean;
  showContainer: boolean;
  handleClose: () => void;
  workSelected: ISelectWorkDetail | null;
};

export default function Drawer({
  showContainer,
  showOverlay,
  handleClose,
  workSelected,
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

  if (!workSelected) return null;

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
            {/* Resto del contenido del Drawer, usando los detalles del trabajo seleccionado */}
            <p className="text-lg font-bold">{workSelected.name}</p>
            <p className="w-full max-w-[520px] text-base text-[#8B8B8B]">
              {workSelected.description}
            </p>

            <div className="mt-4">
              <div className="flex flex-wrap gap-4">
                {workSelected.topics.map((topic: string) => (
                  <p
                    key={topic}
                    className="rounded-lg bg-[#F6F7F8] px-3 py-1.5 text-sm font-medium text-[#8B8B8B]"
                  >
                    {topic}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-y-4">
              <img
                alt="img-1"
                src={workSelected.imageOne}
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover"
              />
              <img
                alt="img-2"
                src={workSelected.imageTwo}
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover lg:object-contain"
              />
              <img
                alt="img-3"
                src={workSelected.imageThree}
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover lg:object-contain"
              />
              <div className="my-8">
                <p className="font-bold">More information</p>
                <p className="w-full max-w-[520px] text-base text-[#8B8B8B]">
                  {workSelected.moreInformation}
                </p>
              </div>
              <img
                alt="img-4"
                src={workSelected.imageFour}
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover lg:object-contain"
              />
              <img
                alt="img-5"
                src={workSelected.imageFive}
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover lg:object-contain"
              />
              <img
                alt="img-6"
                src={workSelected.imageSix}
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover lg:object-contain"
              />
              <img
                alt="img-7"
                src={workSelected.imageSeven}
                className="h-[520px] w-full rounded-lg border bg-[#F6F7F8] object-cover lg:object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
