import RockImg from '@/assets/imgs/rock.jpg';
import DeserImg from '@/assets/imgs/desert.jpg';
import Image from 'next/image';
import FloatItems from './FloatItems';

export default function Home() {
  return (
    <main className="relative left-[200px] w-[calc(100%-200px)] min-h-screen">
      <div id="Mariquita" className="relative grid grid-cols-[33%_67%]">
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
        <FloatItems />
      </div>
      <div className="h-[700px]" />
    </main>
  );
}
