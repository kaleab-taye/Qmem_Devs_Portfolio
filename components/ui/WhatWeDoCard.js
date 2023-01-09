import {
  faArrowRight,
  faPen,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WhatWeDoCard({ title, description, icon, children, state }) {
  let classN ="";

  if (state ==1){
    console.log('found')
    classN = "grid group relative col-start-0"
  }
  
  return (
    <div className="grid group relative">
      <div className="   grid grid-cols-3 gap-2 my-auto ">
        <div className=" my-auto col-start-3 row-start-auto text-accentColor dark:text-accentColorDark grid m-auto grid min-w-[120px]">
          {children}
        </div>
        <div className="grid m-auto col-span-2 row-start-1 col-start-1 ">
          <div className="text-lg font-bold ">{title}</div>
          <div className="text-sm text-textColor1 dark:text-textColor1Dark opacity-60">
            {description}
          </div>
        </div>
      </div>
     {/*  <div className="absolute hidden shadow-xl group-hover:block bottom-0 right-0">
        <div className="grid h-[100%] gap-1 grid-flow-col">
          <div className="my-auto opacity-90 text-sm">Read more</div>{' '}
          <FontAwesomeIcon
            className="font-bold h-4 w-4 my-auto"
            icon={faArrowRight}
          />
        </div>
      </div> */}
    </div>
  );
}
