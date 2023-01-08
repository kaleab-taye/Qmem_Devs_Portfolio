import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import logoImage from '../../public/Logo.png';

export default function TestimonialCard({ image, body, by, position }) {
  return (
    <span className="max-w-[595px] lg:max-w-[695px] m-[40px] md:mx-auto border-2 bg-background3 dark:bg-background3Dark rounded-lg border-background2 dark:border-background2Dark text-textColor1 dark:text-textColor1Dark z-1 ">
      <span className="absolute mt-[-30px] ml-[-30px] h-[80px] w-[80px]">
        <Image
          className="rounded-full w-[80px] h-[80px] border-2 shadow-md border-background2 dark:border-background2Dark"
          src={logoImage}
          alt="user image"
        />
      </span>
      <span className="pr-[20px] pb-[20px] pl-[60px] pt-[30px] grid grid-flow-row gap-3">
        <span className="opacity-80 text-[14px] italic">
          Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
          Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae
          lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis
          tempus ex.
        </span>
        <span className=" grid grid-flow-row gap-1">
          <span className="font-bold text-[12.6px]">{by}</span>
          <span className="opacity-70 text-[11.2px]">Sagebrush</span>
        </span>
      </span>
      <span className="grid ">
        <FontAwesomeIcon
          className="text-background2 dark:text-background2Dark -mt-[75px] ml-[20px] w-[30px] h-[25px]"
          icon={faQuoteLeft}
        />
        <span className="ml-auto">
          <FontAwesomeIcon
            className="absolute text-background2 dark:text-background2Dark w-[31.5px] h-[36px] -ml-[10px] -mt-[20px] -z-1 "
            icon={faQuoteRight}
          />
        </span>
      </span>
    </span>
  );
}
