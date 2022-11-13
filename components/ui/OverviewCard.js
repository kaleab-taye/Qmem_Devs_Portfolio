import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CountUp } from 'use-count-up';
export default function OverviewCard({ icon, text, number, unit }) {
  const [isAOpen, setIsAOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(router.pathname);
      try {
        // window height
        let windowHeight = window.innerHeight;
        // distance of div(top part) element from the top of the screen
        let dist = document
          .querySelector('.scrollPositionDetector')
          .getBoundingClientRect().top;
        // console.log(windowHeight, dist,windowHeight-dist);

        if (dist - windowHeight <= 0) {
          setIsAOpen(true);
        }
        return () => {
          window.removeEventListener('scroll', () => {});
        };
      } catch (error) {}
      
    });
  }, [isAOpen]);
  return (
    <div className="grid relative">
      <div className="absolute w-0 z-0 h-0 text-background1 dark:text-background1Dark compA">.</div>
      <div className="h-[100%] z-10 transition-all  text-center hover:-translate-y-2 ease-in-out duration-500 my-auto grid grid-flow-row border-2 rounded-lg bg-background3 dark:bg-background3Dark  pt-[25px] px-[10px] pb-[15px] border-background2 dark:border-background2Dark">
        <FontAwesomeIcon
          className="mx-auto w-[33px] h-[33px] text-accentColor dark:text-accentColorDark"
          icon={icon}
        />
        <div className="mx-auto text-[16px] m-[15px] font-bold">{text}</div>
        <div className="scrollPositionDetector  mx-auto text-[38px] flex mb-[10px]">
          <CountUp isCounting={isAOpen} end={number} duration={2} />
          <span className="text-sm opacity-60 font-bold mb-auto mt-2">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
