import { motion } from 'framer-motion';

import Content from '../components/Home/Content';

export default function Home() {
  return (
    <div className="w-full max-w-7xl lg:mt-16">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeIn',
          }}
          id="grid_bg"
          className="absolute inset-0 z-0"
        />
        <div id="radial_overlay" className="absolute inset-0 z-10" />
        <div className="relative z-20 flex h-[500px] flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeIn',
            }}
            className="text-base font-medium text-[#8B8B8B]"
          >
            Everything can be better
          </motion.p>
          <div className="w-[496px]">
            <div className="relative h-[50px] w-full overflow-hidden md:h-[60px]">
              <motion.h1
                initial={{ top: 54, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-x-0 mb-6 text-center text-4xl font-bold leading-[54px] md:text-5xl"
              >
                Software Engineer
              </motion.h1>
            </div>
            <div className="relative h-[50px] w-full overflow-hidden md:h-[60px]">
              <motion.h1
                initial={{ top: 54, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
                className="absolute inset-x-0 mb-6 text-center text-4xl font-bold leading-[54px] md:text-5xl"
              >
                and Designer{' '}
                <span className="bg-gradient-to-tl from-[#C25D00] to-[#FF7A00] bg-clip-text text-transparent">
                  Ricardo
                </span>
              </motion.h1>
            </div>
          </div>
          <motion.a
            initial={{ opacity: 0, marginTop: 64 }}
            animate={{ opacity: 1, marginTop: 32 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            download
            href="/Ricardo_Gonzalez_Flores_Resume.pdf"
            className="mt-8 flex items-center gap-x-2 rounded-full bg-[#E5E5E5] py-2 pl-4 pr-2 font-medium"
          >
            Download Resume
            <img alt="download-icon" src="/icons/download.svg" />
          </motion.a>
        </div>
      </div>
      <motion.div
        initial={{
          marginTop: 100,
          opacity: 0,
        }}
        animate={{
          marginTop: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Content />
      </motion.div>
    </div>
  );
}
