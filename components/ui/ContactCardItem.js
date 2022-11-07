import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactCardItem() {
  return (
    <div>
      <div className="grid grid-flow-col gap-4">
        <div className="text-accentColor mx-auto mt-2">
          <FontAwesomeIcon className="w-[23px] h-[23px] m-auto" icon={faPhone} />
        </div>
        <div className="grid grid-flow-row">
          <div className="text-[16px] font-semibold">415-832-2000</div>
          <div className="text-[12.88px] opacity-50">
            Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.
          </div>
        </div>
      </div>
    </div>
  );
}
