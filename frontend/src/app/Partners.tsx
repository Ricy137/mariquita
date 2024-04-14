import { PARTNERS } from '@/utils/constants';

const Partners: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden text-[5.625rem] outline outline-1 outline-[#ebebeb]">
      <div className="py-[1.75px] flex flex-row items-center gap-x-[6rem] animate-[scroll_10s_linear_infinite] w-[200%]">
        {PARTNERS.map((partner) => (
          <div className="whitespace-nowrap" key={partner}>
            {partner}
          </div>
        ))}
        {PARTNERS.map((partner) => (
          <div className="whitespace-nowrap" key={`${partner}-2`}>
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
