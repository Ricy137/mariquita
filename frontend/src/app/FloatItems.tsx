'use client';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash-es';

const FloatItems: React.FC = () => {
  const [scrollDis, setScrollDis] = useState<number>(0);

  useEffect(() => {
    const container = document.getElementById('Mariquita');
    const handleScroll = throttle(() => {
      if (!container) return;
      // const containerH = container.clientHeight;
      const containerTop = container.getBoundingClientRect().top;
      // const passedDistance = containerTop - (window.innerHeight - 100);
      // console.log(passedDistance, containerTop, window.innerHeight, containerH);
      if (containerTop > 0) {
        if (scrollDis === 0) return;
        setScrollDis(0);
        return;
      }
      const distance = Math.abs(containerTop) * 1.05;
      console.log(distance);
      setScrollDis(distance);
    }, 50);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          transform: `translate(-100px,-${scrollDis * 1.4 + 80}px)`,
        }}
        className="p-[24px] absolute left-[33%] top-[50%] flex items-center justify-center w-[300px] h-[300px] text-[#ffffff] bg-[#000000] z-[1]"
      >
        introduction introduction introduction
      </div>
      <div
        style={{
          transform: `translateY(-${scrollDis}px)`,
        }}
        className="absolute right-[33%] top-[50%] text-[36px] text-[#01ff00]"
      >
        Mariquita
      </div>
    </>
  );
};

export default FloatItems;
