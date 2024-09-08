import { useState } from 'react';

import Drawer from '@components/Drawer';
import { ISelectWork } from '@interfaces/SelectWork';
import { selectWork } from '@mocks/SelectWork';

export default function SelectWork() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleShowDrawer = () => {
    setShowOverlay(true);
    setShowDrawer(true);
  };

  const handleCloseDrawer = () => {
    setShowOverlay(false);
    setShowDrawer(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-y-8">
        {selectWork.map((work: ISelectWork) => (
          <div>
            <button
              type="button"
              className="w-full text-left"
              onClick={handleShowDrawer}
              key={work.id}
            >
              <img
                alt="image-work"
                src={work.image}
                className="mb-4 h-96 w-full rounded-xl border border-[#E9E9E9] bg-[#F6F7F8]"
              />
            </button>
            <div className="flex w-full items-start justify-between">
              <p className="font-medium text-[#8B8B8B]">{work.year}</p>
              <div className="w-[364px]">
                <p className="font-bold">{work.name}</p>
                <p className=" text-[#8B8B8B]">{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Drawer
        handleClose={handleCloseDrawer}
        showContainer={showDrawer}
        showOverlay={showOverlay}
      />
    </div>
  );
}
