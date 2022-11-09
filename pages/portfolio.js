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
    <BodyLayout page="portfolio">
      {/* current page desc section start*/}
      <PageHeading heading="Portfolio" subHeading="" />
      {/* current page desc section end*/}
      <div className="grid grid-flow-row mx-10  2xl:mx-auto max-w-maxContentWid">
        {/* category option start*/}
        <div className="ml-auto my-8 grid">
          <div className="	 grid grid-flow-col ml-auto  gap-5  text-textColor1 text-xs">
            <div className="cursor-pointer " onClick={() => setCategory('all')}>
              {category === 'all' ? (
                <div className="opacity-100">All</div>
              ) : (
                <div className="opacity-50 hover:opacity-100">All</div>
              )}
            </div>
            <div
              className="cursor-pointer hover:opacity-100 "
              onClick={() => setCategory('mobileApp')}
            >
              {' '}
              {category === 'mobileApp' ? (
                <div className="opacity-100">Mobile App</div>
              ) : (
                <div className="opacity-50 hover:opacity-100">Mobile App</div>
              )}
            </div>
            <div
              className="cursor-pointer hover:opacity-100 "
              onClick={() => setCategory('webApp')}
            >
              {' '}
              {category === 'webApp' ? (
                <div className="opacity-100">Web App</div>
              ) : (
                <div className="opacity-50 hover:opacity-100">Web App</div>
              )}
            </div>
            <div
              className="cursor-pointer hover:opacity-100 "
              onClick={() => setCategory('ui/ux')}
            >
              {' '}
              {category === 'ui/ux' ? (
                <div className="opacity-100">UI/UX Design</div>
              ) : (
                <div className="opacity-50 hover:opacity-100">UI/UX Design</div>
              )}
            </div>
            <div
              className="cursor-pointer hover:opacity-100 "
              onClick={() => setCategory('fullstack')}
            >
              {' '}
              {category === 'fullstack' ? (
                <div className="opacity-100">Fullstack</div>
              ) : (
                <div className="opacity-50 hover:opacity-100">Fullstack</div>
              )}
            </div>
            <div
              className="cursor-pointer hover:opacity-100"
              onClick={() => setCategory('website')}
            >
              {' '}
              {category === 'website' ? (
                <div className="opacity-100">Website</div>
              ) : (
                <div className="opacity-50 hover:opacity-100">Website</div>
              )}
            </div>
          </div>
          {/* hidden display to maintain width start */}
          <div className="h-0 overflow-hidden opacity-0 grid grid-cols-2 md:grid-cols-3 gap-4">
            <ShowcaseDisplay category="all" />
          </div>
          {/* hidden display to maintain width end */}
        </div>
        {/* category option end*/}
        <div className="  2xl:mx-auto my-10  grid grid-flow-row">
          {/* portfolio display start */}
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <ShowcaseDisplay category={category} />
          </div>
          {/* portfolio display start */}
        </div>
      </div>
    </BodyLayout>
  );
}
