import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OverviewCard({icon,text,number}) {
  return (
    <div className="grid">
      <div className="transition-all hover:-translate-y-2 ease-in-out duration-500 my-auto grid grid-flow-row border-2 rounded-lg bg-background3  pt-[25px] px-[10px] pb-[15px] border-background2">
        <FontAwesomeIcon
          className="mx-auto w-[33px] h-[33px] text-accentColor"
          icon={icon}
        />
        <div className="mx-auto text-[16px] m-[15px] font-bold">
          {text}
        </div>
        <div className="mx-auto text-[48px]  mb-[10px]">{number}</div>
      </div>
    </div>
  );
}
