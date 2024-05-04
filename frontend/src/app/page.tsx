import TitleBoard from './TitleBoard';
import Partners from './Partners';

export default function Home() {
  return (
    <main className="relative left-[200px] w-[calc(100%-200px)] min-h-screen">
      <TitleBoard />
      <div
        id="Mariquita"
        className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[3fr_2fr_2fr_2fr_3fr] w-full min-h-screen text-[1.25rem]"
      >
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>
            Gm, it’s Mariquita.
            <br />
            I'm a content strategist and conversion copywriter for web3 regens
            that have more than a dash of degen in them.
            <br />
            My passion is to connect the brightest developer talent, and the
            most aligned community members, to your protocol, dApp, on-chain
            movement.
          </p>
        </div>
        <div className="bg-[url('/desert.jpg')] bg-fixed bg-cover bg-center rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        <div className="outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <div className="w-full h-full rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        </div>
        <div className="row-span-3 bg-[url('/desert.jpg')] bg-fixed bg-cover bg-center rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>Professional (feature1)</p>
        </div>
        <div className="bg-[url('/desert.jpg')] bg-fixed bg-cover bg-right-center rounded-[2rem]" />
        <div className="bg-[url('/desert.jpg')] bg-fixed bg-cover bg-center rounded-[2rem]" />
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>Blockchain native (feature2) </p>
        </div>
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>feature3</p>
        </div>
        <div className="bg-[url('/desert.jpg')] bg-fixed bg-cover bg-center rounded-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]" />
        <div className="p-[2rem] outline -outline-offset-[0.5px] outline-1 outline-[#ebebeb]">
          <p>
            From Head Writer for new society’s inaugural book on Web3 culture to
            content marketing consultant with Hedera’s HBAR Foundation, I have
            worked with clients across seven different project verticals to
            deliver over eighty unique content assets.
          </p>
        </div>
        <div className="bg-[url('/desert.jpg')] bg-fixed bg-cover bg-right-center rounded-[2rem]" />
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
      <Partners />
    </main>
  );
}
