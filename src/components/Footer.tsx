/* eslint-disable jsx-a11y/anchor-is-valid */
import FooterLink from './Footer/FooterLink';

export default function Footer() {
  return (
    <div className="mt-24 flex h-80 w-full justify-center bg-[#F6F7F8] pb-10 pt-5">
      <div className="grid w-full max-w-7xl grid-cols-6 gap-x-5">
        <div className="col-span-3">
          <p className="font-bold">Ricardo&#39;s portfolio</p>
          <p className="text-[#8D8D8D]">Everything can be better</p>
        </div>
        <div className="col-span-1">
          <p className="mb-3 font-bold">Pages</p>
          <FooterLink name="Home" url="/" />
          <FooterLink name="About" url="/about" />
          <FooterLink name="Contact" />
        </div>
        <div className="col-span-1">
          <p className="mb-3 font-bold">Connect</p>
          <div className="flex flex-col gap-y-2">
            <FooterLink
              isExternal
              name="WhatsApp"
              url="https://wa.me/524774122683"
            />
            <FooterLink
              isExternal
              name="LinkedIn"
              url="https://www.linkedin.com/in/ricardogf396/"
            />
            <FooterLink
              isExternal
              name="Email"
              url="mailto:ricardogf396@gmail.com"
            />
            <FooterLink
              isExternal
              name="GitHub"
              url="https://github.com/RicardoGF396"
            />
            <FooterLink
              isExternal
              name="Linktree"
              url="https://linktr.ee/ricardogf"
            />
          </div>
        </div>
        <div className="flex items-end justify-end">
          <p className="text-[#8D8D8D]">Copyright Ricardo 2024</p>
        </div>
      </div>
    </div>
  );
}
