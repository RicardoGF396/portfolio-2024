import { IEvent } from '@interfaces/Event';
import { events } from '@mocks/Events';

export default function Events() {
  return (
    <div className="flex flex-col gap-y-10">
      {events.map((eventItem: IEvent) => (
        <div>
          <p className="font-bold">{eventItem.name}</p>
          <p className="mb-4 text-sm font-medium text-[#8B8B8B]">
            {eventItem.type}
          </p>
          <a
            href={eventItem.link}
            target="_blank"
            rel="noreferrer"
            className="mb-6 flex w-full items-center gap-6 rounded-xl text-left transition-all hover:shadow-2xl "
          >
            <img
              alt="image-work"
              src={eventItem.image}
              className="h-96 w-full rounded-xl border border-[#E9E9E9] bg-[#F6F7F8] object-cover"
            />
          </a>
          <p className="text-[#8B8B8B]">{eventItem.description}</p>
        </div>
      ))}
    </div>
  );
}
