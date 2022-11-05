import { faPen, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WhatWeDoCard({ title, description, icon,children }) {
  return (
    <div className="grid grid-flow-col gap-4 my-3 ">
      <div  className="w-8 text-accentColor" >
        {children}
      </div>
      <div>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm text-textColor3 opacity-90">{description}</div>
      </div>
    </div>
  );
}
