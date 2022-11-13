import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import Placeholder from './Placeholder';
import ShowcaseOverlay from './ShowcaseOverlay';

export default function ShowcaseItem({ image, name, description, key }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [isOverlayOpen, setOverlayOpenState] = useState(false);
  return (
    <Placeholder isLoading={imageLoading}>
      <div className="relative grid grid-flow-col rounded-lg overflow-hidden ">
        <Image
          className="z-20  hover:z-0 transition-all hover:z-0 duration-700 object-cover hover:scale-125   "
          src={image}
          alt="port image"
          onLoadingComplete={() => setImageLoading(false)}
          onClick={() => setOverlayOpenState(true)}
        />
        <div className="z-30 pointer-events-none absolute text-sm font-bold bg-background1 dark:bg-background1Dark mt-2 ml-2 rounded text-textColor1 dark:text-textColor1Dark py-1 px-2">
          {name}
        </div>
        <div className="z-10 pointer-events-none rounded grid grid-flow-col text-textColor1 dark:text-textColor1Dark absolute bottom-0 mb-2 text-xs  bg-background1 dark:bg-background1Dark mt-10 z-100 ml-2 text-textColor1 dark:text-textColor1Dark py-1 px-2">
          {description}
        </div>
        <div className="z-10 absolute pointer-events-none bottom-0 right-0 mr-2 mb-2 bg-background1 dark:bg-background1Dark rounded text-textColor1 dark:text-textColor1Dark py-1 px-1">
          <FontAwesomeIcon className="text-accentColor dark:text-accentColorDark" icon={faLink} />
        </div>
      </div>
      <ShowcaseOverlay
        isOverlayOpen={isOverlayOpen}
        setOverlayOpenState={setOverlayOpenState}
        key={key}
      />
    </Placeholder>
  );
}
