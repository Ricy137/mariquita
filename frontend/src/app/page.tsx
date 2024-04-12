import RockImg from '@/assets/imgs/rock.jpg';
import DeserImg from '@/assets/imgs/desert.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative left-[200px] w-[calc(100%-200px)] min-h-screen">
      <div
        id="Mariquita"
        className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[3fr_2fr_2fr_2fr_3fr] w-full min-h-screen text-[1.25rem]"
      >
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>
            Since xxx, I started my relentless pursuit of the cutting edge of
            blockchain technology...
          </p>
        </div>
        <div className="col-span-2 bg-[url('/rock.jpg')] bg-fixed bg-cover bg-center rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        {/* <div className="col-span-2 outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <div className="w-full h-full rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        </div> */}
        <div className="row-span-3 bg-[url('/desert.jpg')] bg-fixed bg-cover bg-center rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>Professional (feature1)</p>
        </div>
        <div className="bg-[url('/rock.jpg')] bg-fixed bg-cover bg-center rounded-[2rem]" />
        <div className="bg-[url('/rock.jpg')] bg-fixed bg-cover bg-center rounded-[2rem]" />
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>Blockchain native (feature2) </p>
        </div>
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>feature3</p>
        </div>
        <div className="bg-[url('/rock.jpg')] bg-fixed bg-cover bg-center rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>
            I've published over xxx pieces, cooperated with org xyz, abc... and
            invovled numerous topics like xxx
          </p>
        </div>
        <div className="bg-[url('/rock.jpg')] bg-fixed bg-cover bg-center rounded-[2rem]" />
        {/* <Image
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
        /> */}
      </div>
      <div className="w-full h-[700px]" />
    </main>
  );
}
