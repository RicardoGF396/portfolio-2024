type FooterLinkProps = {
  url?: string;
  isExternal?: boolean;
  name: string;
};

export default function FooterLink({ url, isExternal, name }: FooterLinkProps) {
  if (!url) {
    return (
      <button
        type="button"
        className="block text-[#8D8D8D] hover:text-[#0F0F0F]"
        aria-label={`Go to ${name}`}
      >
        {name}
      </button>
    );
  }

  return (
    <a
      href={url}
      rel="noreferrer"
      target={isExternal ? '_blank' : ''}
      className="block text-[#8D8D8D] hover:text-[#0F0F0F]"
    >
      {name}
    </a>
  );
}

FooterLink.defaultProps = {
  url: '#',
  isExternal: false,
};
