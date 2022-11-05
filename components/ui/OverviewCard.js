import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OverviewCard() {
  return (
    <div className="grid">
      <div className="hover:-mt-2 ease-linear duration-150 my-auto grid grid-flow-row border-2 rounded-lg bg-background3  pt-[25px] px-[10px] pb-[15px] border-background2">
        <FontAwesomeIcon className='mx-auto w-[33px] h-[33px] text-accentColor' icon={faHeart} />
        <div className='mx-auto text-[16px] m-[15px] font-bold'>Happy Clients</div>
        <div className='mx-auto text-[48px]  mb-[10px]'>578</div>
      </div>
    </div>
  );
}
