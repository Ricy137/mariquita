import { PARTNERS, Partner } from '@/utils/constants';
import Image from 'next/image';

const Partners: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden outline outline-1 outline-[#ebebeb]">
      <Testimonial />
      <Carousel />
    </div>
  );
};

export default Partners;

const Testimonial: React.FC = () => (
  <div className="grid grid-cols-2 grid-rows-2 2xl:grid-cols-4 2xl:grid-rows-1 backdrop-blur-[50px]">
    <div className="p-[40px] text-[2.25rem]">How people think of me?</div>
    {PARTNERS.map((partner) => (
      <TestimonialItem key={partner.name} {...partner} />
    ))}
  </div>
);

const TestimonialItem: React.FC<Partner> = ({
  name,
  title,
  logo,
  description,
  link,
}) => {
  return (
    <div className="p-[40px] w-full grid grid-cols-[64px_auto] grid-rows-[auto_auto] gap-[1rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
      <a href={link}>
        <Image src={logo} alt={name} width={64} height={64} />
      </a>
      <div className="font-medium content-center">
        <p>{name}</p>
        <p>{title}</p>
      </div>
      <p className="col-span-2">{description}</p>
    </div>
  );
};

const Carousel: React.FC = () => (
  <div className="py-[1.75px] flex flex-row items-center gap-x-[6rem] w-[200%] h-[200px] text-[5.75rem] leading-[200px] animate-[scroll_10s_linear_infinite]">
    {PARTNERS.map((partner) => (
      <div className="whitespace-nowrap" key={partner.org}>
        {partner.org}
      </div>
    ))}
    {PARTNERS.map((partner) => (
      <div className="whitespace-nowrap" key={`${partner.org}-2`}>
        {partner.org}
      </div>
    ))}
  </div>
);
