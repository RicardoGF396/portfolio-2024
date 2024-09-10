import { useState } from 'react';

import Drawer from '@components/Drawer';
import { ISelectWork, ISelectWorkDetail } from '@interfaces/SelectWork';
import { selectWork } from '@mocks/SelectWork';
import { selectWorkDetail } from '@mocks/SelectWorkDetail';

export default function SelectWork() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [workSelected, setWorkSelected] = useState<ISelectWorkDetail | null>(
    null,
  );

  const handleShowDrawer = (id: number) => {
    const selectedWork = selectWorkDetail.find((work) => work.id === id);
    if (selectedWork) {
      setWorkSelected(selectedWork);
      setShowOverlay(true);
      setShowDrawer(true);
    }
  };

  const handleCloseDrawer = () => {
    setShowOverlay(false);
    setShowDrawer(false);
    setWorkSelected(null);
  };

  return (
    <div>
      <div className="flex flex-col gap-y-8">
        {selectWork.map((work: ISelectWork) => (
          <div>
            <button
              type="button"
              className="mb-4 h-auto w-full overflow-hidden rounded-xl border border-[#E9E9E9] text-left transition-all hover:shadow-2xl"
              onClick={() => handleShowDrawer(work.id)}
              key={work.id}
            >
              <img
                alt="image-work"
                src={work.image}
                className=" h-96 w-full bg-[#F6F7F8] object-cover"
              />
            </button>
            <div className="flex w-full items-start justify-between gap-x-4">
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
        workSelected={workSelected || null}
      />
    </div>
  );
}
