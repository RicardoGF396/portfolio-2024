import { IEvent } from '@interfaces/Event';
import { events } from '@mocks/Events';
import { ArrowRight } from 'heroicons-react';

export default function Events() {
  return (
    <div className="flex flex-col gap-y-10">
      {events.map((eventItem: IEvent) => (
        <div>
          <p className="font-bold">{eventItem.name}</p>
          <p className="mb-4 text-sm font-medium text-[#8B8B8B]">
            {eventItem.type}
          </p>
          <img
            alt="image-work"
            src={eventItem.image}
            className="mb-4 h-96 w-full rounded-xl border border-[#E9E9E9] bg-[#F6F7F8]"
          />
          <p className="text-[#8B8B8B]">{eventItem.description}</p>
          <div className="mt-4 flex w-full items-center justify-end gap-x-2">
            <a
              href="/"
              className="flex items-center rounded-lg bg-[#0F0F0F] py-1 pl-2 pr-1 font-medium text-[#FAFAFA]"
            >
              Go to link
              <ArrowRight
                className="ml-2 w-5 -rotate-45"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
