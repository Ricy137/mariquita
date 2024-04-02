import Link from 'next/link';
import Image from 'next/image';
import ToolTip from '@/components/Tooltip';
import { TwitterIcon, LinkedInIcon, C3Icon } from '@/components/Icons';
import MRIcon from '@/assets/icons/mr.svg';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 px-[20px] flex flex-col gap-y-[24px] items-center justify-center w-[200px] h-full bg-white">
      <div className="flex flex-col gap-y-[5px]">
        <p className="font-medium text-[20px] text-end">
          Mariquita de Boissière
        </p>
        <p className="font-light uppercase">
          {' '}
          content marketer and copywriter for web3 changemakers
        </p>
      </div>
      <ToolTip className="cursor-not-allowed" text="Coming soon">
        {/* <Link
          className="font-medium text-[16px] cursor-not-allowed"
          href="/articles"
        >
          Articles
        </Link> */}
        <div className="font-medium text-[16px] cursor-not-allowed">
          Articles
        </div>
      </ToolTip>
      <div className="flex flex-col items-center gap-y-[12px]">
        <p className="font-light uppercase"> contact me</p>
        <a href="https://twitter.com/MariquitadB" target="_blank">
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/mariquita-de-boissiere"
          target="_blank"
        >
          <LinkedInIcon className="text-[24px]" />
        </a>
        <a href="https://www.culture3.com/writer/mariquita" target="_blank">
          <C3Icon className="w-[24px] h-[24px]" />
        </a>
        <a href="https://www.culture3.com/writer/mariquita" target="_blank">
          <Image
            alt="Muck Rack"
            width={24}
            height={24}
            src={MRIcon}
            className="w-[24px] h-[24px] select-none"
            draggable={false}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
