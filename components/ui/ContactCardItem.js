import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactCardItem({ icon, text, description }) {
  return (
    <div className=' w-full grid'>
      <div className="grid grid-flow-col mr-auto gap-4">
        <div className="text-accentColor dark:text-accentColorDark mr-auto mt-2 ">
          <FontAwesomeIcon className="w-[23px] h-[23px] m-auto" icon={icon} />
        </div>
        <div className="grid grid-flow-row   ">
          <div className="text-[16px] font-semibold  mr-auto">{text}</div>
          <div className="text-[12.88px] opacity-50 ">{description} </div>
        </div>
      </div>
    </div>
  );
}
