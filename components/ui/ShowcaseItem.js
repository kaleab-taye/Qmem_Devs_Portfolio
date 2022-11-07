import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function ShowcaseItem({img}) {
  return (
    <div className="relative grid grid-flow-col rounded-lg overflow-hidden ">
      <Image
        className="z-20  hover:z-0 transition-all hover:z-0 duration-700 object-cover hover:scale-125   "
        src={img}
        alt="port image"
      />
      <div className="z-30 pointer-events-none absolute text-sm font-bold bg-background1 mt-2 ml-2 rounded text-textColor1 py-1 px-2">
        Shuk-Shukta-Blogs
      </div>
      <div className="z-10 pointer-events-none rounded grid grid-flow-col text-textColor1 absolute bottom-0 mb-2 text-xs  bg-background1 mt-10 z-100 ml-2 text-textColor1 py-1 px-2">
        blogging and idea sharing site
      </div>
      <div className="z-10 absolute pointer-events-none bottom-0 right-0 mr-2 mb-2 bg-background1 rounded text-textColor1 py-1 px-1">
        <FontAwesomeIcon className="text-accentColor" icon={faLink} />
      </div>
    </div>
  );
}
