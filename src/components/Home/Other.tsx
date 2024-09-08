import { IMore } from '@interfaces/More';
import { more } from '@mocks/More';

export default function Other() {
  return (
    <div>
      {more.map((moreItem: IMore) => (
        <button
          type="button"
          key={moreItem.id}
          className="flex w-full items-center gap-6 rounded-xl px-3 py-4 text-left transition-all hover:bg-[#E9E9E9]"
        >
          <img
            alt="certification-image"
            src={moreItem.image}
            className="size-16 rounded-xl border border-[#E9E9E9] bg-[#F6F7F8] object-cover"
          />
          <div>
            <p className="font-bold">{moreItem.name}</p>
            <p className="text-sm font-medium text-[#8B8B8B]">
              {moreItem.type}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
