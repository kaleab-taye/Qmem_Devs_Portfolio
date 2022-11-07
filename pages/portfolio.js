import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import BodyLayout from '../components/ui/BodyLayout';
import PageHeading from '../components/ui/PageHeading';
import ShowcaseItem from '../components/ui/ShowcaseItem';
import ShowcaseDisplay from '../components/ui/sections/ShowcaseDisplay';
import { useState } from 'react';

export default function Portfolio() {
  const [category, setCategory] = useState('all');
  return (
    <BodyLayout>
      {/* current page desc section start*/}
      <PageHeading heading="Portfolio" subHeading="" />
      {/* current page desc section end*/}

      <div className="max-w-maxContentWid mx-10 2xl:mx-auto my-10  grid grid-flow-row">
        {/* category option start*/}
        <div className="	 grid grid-flow-col ml-auto  gap-5 my-8 text-textColor1 text-xs">
          <div
            className="cursor-pointer hover:opacity-100 opacity-50"
            onClick={() => setCategory('all')}
          >
            All
          </div>
          <div
            className="cursor-pointer hover:opacity-100 opacity-50"
            onClick={() => setCategory('mobileApp')}
          >
            {' '}
            Mobile App
          </div>
          <div
            className="cursor-pointer hover:opacity-100 opacity-50"
            onClick={() => setCategory('webApp')}
          >
            {' '}
            Web App
          </div>
          <div
            className="cursor-pointer hover:opacity-100 opacity-50"
            onClick={() => setCategory('ui/ux')}
          >
            {' '}
            UI/UX Design
          </div>
          <div
            className="cursor-pointer hover:opacity-100 opacity-50"
            onClick={() => setCategory('fullstack')}
          >
            {' '}
            Fullstack
          </div>
          <div
            className="cursor-pointer hover:opacity-100 opacity-50"
            onClick={() => setCategory('website')}
          >
            {' '}
            Website
          </div>
        </div>
        {/* category option end*/}
        {/* portfolio display start */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <ShowcaseDisplay category={category} />
        </div>
        {/* portfolio display start */}
      </div>
    </BodyLayout>
  );
}
