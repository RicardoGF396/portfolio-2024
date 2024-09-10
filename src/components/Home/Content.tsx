import { useState, useRef, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Briefcase, BookOpen, LightBulb, Fire } from 'heroicons-react';

import ButtonContent from './ButtonContent';
import Certifications from './Certifications';
import Events from './Events';
import More from './More';
import SelectWork from './SelectWork';

export default function Content() {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const buttons = [
    { id: 1, name: 'Select work', icon: Briefcase },
    { id: 2, name: 'Certifications', icon: BookOpen },
    { id: 3, name: 'Achievements & Events', icon: LightBulb },
    { id: 4, name: 'More', icon: Fire },
  ];

  useEffect(() => {
    if (selectedButton && containerRef.current) {
      const button = containerRef.current.children[
        selectedButton
      ] as HTMLElement;
      setDimensions({
        width: button.offsetWidth,
        left: button.offsetLeft,
      });
    }
  }, [selectedButton]);

  return (
    <div className="flex w-full max-w-7xl flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="mb-6 flex flex-wrap gap-3 px-4 lg:hidden">
          {buttons.map((button) => (
            <ButtonContent
              key={button.id}
              name={button.name}
              icon={button.icon}
              isSelected={selectedButton === button.id}
              isMobile
              onClick={() => setSelectedButton(button.id)}
            />
          ))}
        </div>
        <div>
          <div
            ref={containerRef}
            className="no-scrollbar relative mb-6 hidden gap-x-6 px-4 md:w-full lg:flex lg:px-0"
          >
            {selectedButton && (
              <motion.div
                className="absolute inset-y-0 rounded-full bg-[#0F0F0F]"
                initial={false}
                animate={{
                  width: dimensions.width,
                  left: dimensions.left,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 50 }}
              />
            )}
            {buttons.map((button) => (
              <ButtonContent
                key={button.id}
                name={button.name}
                icon={button.icon}
                isMobile={false}
                isSelected={selectedButton === button.id}
                onClick={() => setSelectedButton(button.id)}
              />
            ))}
          </div>
        </div>
        <div className="px-6 md:px-0">
          {selectedButton === 1 && <SelectWork />}
          {selectedButton === 2 && <Certifications />}
          {selectedButton === 3 && <Events />}
          {selectedButton === 4 && <More />}
        </div>
      </div>
    </div>
  );
}
