import { PARTNERS, Partner } from '@/utils/constants';
import Image from 'next/image';

const Partners: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden outline outline-1 outline-[#ebebeb]">
      <div className="grid grid-cols-6 animate-[scroll_20s_linear_infinite] w-[200%]">
        {PARTNERS.map((partner) => (
          <PartnerItem key={partner.name} {...partner} />
        ))}
        {PARTNERS.map((partner) => (
          <PartnerItem key={partner.name} {...partner} />
        ))}
      </div>
    </div>
  );
};

export default Partners;

const PartnerItem: React.FC<Partner> = ({
  name,
  title,
  logo,
  description,
  link,
}) => {
  return (
    <div className="py-[1.75rem] px-[1.5rem] w-full grid grid-cols-[64px_auto] grid-rows-[auto_auto] gap-[1rem] border-l border-l-1 border-[#ebebeb]">
      <a href={link}>
        <Image src={logo} alt={name} width={64} height={64} />
      </a>
      <div className="font-medium content-center">
        <p>{name}</p>
        <p>{title}</p>
      </div>
      <p className="col-start-2">{description}</p>
    </div>
  );
};
