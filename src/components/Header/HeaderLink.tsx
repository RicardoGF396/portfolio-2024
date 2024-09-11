import { useState } from 'react';

import { twMerge } from 'tailwind-merge';

type HeaderLinkProps = {
  name: string;
  cssClass: string;
  link: string;
  icon: string;
};

export default function HeaderLink({
  name,
  cssClass,
  link,
  icon,
}: HeaderLinkProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        'flex items-center gap-x-2 font-bold transition-all hover',
        isHover ? cssClass : '',
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        alt="telegram-icon"
        src={`./icons/${icon}.svg`}
        className={twMerge('w-6', isHover ? cssClass : '')}
      />
      {name}
    </a>
  );
}
