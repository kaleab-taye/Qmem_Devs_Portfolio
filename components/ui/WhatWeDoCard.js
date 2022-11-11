import {
  faArrowRight,
  faPen,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WhatWeDoCard({ title, description, icon, children }) {
  return (
    <div className='group relative'>
      <div className="  cursor-pointer grid grid-flow-col gap-4 my-3  ">
        <div className="w-8 text-accentColor ">{children}</div>
        <div>
          <div className="text-lg font-bold">{title}</div>
          <div className="text-sm text-textColor1 opacity-60">
            {description}
          </div>
        </div>
      </div>
      <div className="absolute hidden shadow-xl group-hover:block bottom-0 right-0">
        <FontAwesomeIcon className="font-bold h-6 w-6" icon={faArrowRight} />
      </div>
    </div>
  );
}
