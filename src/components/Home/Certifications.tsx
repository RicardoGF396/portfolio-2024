import { ICertification } from '@interfaces/Certification';
import { certifications } from '@mocks/Certifications';

export default function Certifications() {
  return (
    <div>
      {certifications.map((certification: ICertification) => (
        <a
          href={certification.link}
          target="_blank"
          rel="noreferrer"
          type="button"
          key={certification.id}
          className="flex w-full items-center gap-6 rounded-xl px-3 py-4 text-left transition-all hover:bg-[#E9E9E9]"
        >
          <img
            alt="certification-image"
            src={certification.image}
            className="size-16 rounded-xl border border-[#E9E9E9] bg-[#F6F7F8] object-cover"
          />
          <div>
            <p className="font-bold">{certification.name}</p>
            <p className="text-sm font-medium text-[#8B8B8B]">
              {certification.organization}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
