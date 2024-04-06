import RockImg from '@/assets/imgs/rock.jpg';
import DeserImg from '@/assets/imgs/desert.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative left-[200px] w-[calc(100%-200px)] min-h-screen">
      <div className="relative grid grid-cols-[33%_67%]">
        <Image
          src={RockImg}
          alt="Rock"
          draggable={false}
          className="pointer-events-none select-none"
        />
        <Image
          src={DeserImg}
          alt="Desert"
          draggable={false}
          className="row-span-2 pointer-events-none select-none"
        />
        {/* <Image
        src={RockImg}
        alt="Rock"
        draggable={false}
        className="pointer-events-none select-none"
      /> */}
        <div className="p-[24px] absolute left-[33%] top-[50%] flex items-center justify-center w-[300px] h-[300px] text-[#ffffff] -translate-y-[40%] -translate-x-[100px] bg-[#000000] z-[1]">
          introduction introduction introduction
        </div>
        <div className="absolute right-[33%] top-[50%] text-[36px] text-[#01ff00]">
          Mariquita
        </div>
      </div>
      <div className="h-[700px]" />
    </main>
  );
}
