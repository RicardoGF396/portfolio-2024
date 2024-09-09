import { IMore } from '@interfaces/More';
import { more } from '@mocks/More';

export default function More() {
  return (
    <div className="mt-12 flex flex-col gap-y-8">
      {more.map((moreItem: IMore) => (
        <div key={moreItem.id} className="flex flex-col gap-y-4">
          <div>
            <p className="font-bold">{moreItem.name}</p>
            <p className="text-sm font-medium text-[#8B8B8B]">
              {moreItem.type}
            </p>
          </div>
          <a
            href={moreItem.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center gap-6 rounded-xl text-left transition-all hover:shadow-2xl"
          >
            <img
              alt="certification-image"
              src={moreItem.image}
              className="h-96 w-full rounded-xl border border-[#E9E9E9] bg-[#F6F7F8] object-cover"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
