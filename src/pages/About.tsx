/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';

import { carrouselImages as images } from '@mocks/CarrouselImages';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

export default function About() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const totalWidth = images.length * 260 + (images.length - 1) * 16;
    const finalPosition = -totalWidth;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 32,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });
    return controls.stop;
  }, [width, xTranslation]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
        delay: 0.3,
      }}
      className="flex w-full flex-col items-center lg:mt-24"
    >
      <div className="flex flex-col items-center px-6 md:px-0">
        <div className="mt-12 w-full max-w-2xl">
          <div className="relative w-full">
            <img
              src="https://assets.lummi.ai/assets/QmVyMEyV9eLcw3KjGMTu8hRcEireZ77oTtcDQgv729k5r1?auto=format&w=1500"
              alt="background"
              className="h-44 w-full rounded-xl border-[#E9E9E9] bg-[#F6F7F8] object-cover"
            />
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGD2KU5WYEayQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695950700971?e=1730937600&v=beta&t=it5BtzOCJRRGcH4sFnmfTDbdA1570sO0xrtvRx_Dn_I"
              alt="profile-image"
              className="absolute left-14 top-[100px] size-[100px] rounded-full border-4 border-[#FAFAFA]"
            />
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div className="flex w-full max-w-[472px] flex-col items-center">
              <p className="text-[#656565]">
                I am a dedicated Software Engineer and Designer with a strong
                foundation in front-end development and UI/UX design. I
                graduated from Universidad La Salle Bajío with a degree in
                Software Engineering, and I have consistently pursued
                opportunities to expand my skill set, especially in web and
                mobile development.
                <br />
                <br />
                Over the course of my career, I've worked in various roles where
                I honed my expertise in React, React Native, and TypeScript,
                while also contributing significantly to design aspects. I am
                passionate about creating seamless user experiences, and my work
                spans a diverse range of projects, from enterprise-level
                applications to freelance mobile apps.
                <br />
                <br />
                What drives me the most is the ability to imagine new products
                or apps and bring them to life. I find it wonderful to envision
                something and then create it. I love programming because it
                allows me to invent and turn my ideas into reality.
                <br />
                <br />
                With experience working in companies like CBQA Solutions and
                Seteneal, I thrive in fast-paced environments where
                problem-solving and innovation are key. I approach each project
                as if it were my own, always aiming to deliver exceptional
                results.
              </p>

              <div className="mt-10 w-full ">
                <p className="text-lg font-bold">Experience</p>
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <p className="font-medium">Software Engineer & Designer</p>
                    <p className="text-[#656565]">CBQA Solutions</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">1 year 3 months</p>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <p className="font-medium">
                      Front-End Developer & Designer
                    </p>
                    <p className="text-[#656565]">Seteneal</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">1 year 3 months</p>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <p className="font-medium">
                      Front-End Developer & Designer
                    </p>
                    <p className="text-[#656565]">YoContigo IT</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">3 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-9 h-[260px] w-full overflow-hidden">
        <motion.div
          className="absolute left-0 flex gap-x-4"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              alt="img"
              src={img}
              className="size-[260px] rounded-xl bg-[#F6F7F8] object-cover"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
