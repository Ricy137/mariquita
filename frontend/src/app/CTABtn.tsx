'use client';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import cx from 'clsx';
import SparkI from '@/assets/icons/spark.png';
import { CheersIcon } from '@/components/Icons';
import Button from '@/components/Button';

const CTABtn: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div
      className="relative w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CheersIcon
        className={cx(
          'absolute left-[26px] transition-transform duration-300',
          isHovering ? '-translate-y-[95%]' : 'translate-y-0'
        )}
      />
      <Image
        className={cx(
          'absolute top-[8px] left-[12px] w-[14px] h-[9.75px] transition-transform duration-150 z-[100]',
          isHovering ? 'scale-100' : 'scale-0'
        )}
        src={SparkI}
        alt="Spark"
        width={8}
        height={6.5}
      />
      <Button color="amber" variant="shadow">
        Booking a call
      </Button>
    </div>
  );
};

export default CTABtn;
