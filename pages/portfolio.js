import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import BodyLayout from '../components/ui/BodyLayout';
import PageHeading from '../components/ui/PageHeading';
import ShowcaseItem from '../components/ui/ShowcaseItem';
import ShowcaseDisplay from '../components/ui/sections/ShowcaseDisplay';
import { useState } from 'react';

export default function Portfolio() {
  const categoryEnum = {all:'all', webapp : 'Web App', mobileApp:'Mobile App', ui_ux_design:'UI/UX Design', fullStack : 'Fullstack', website:'Website'}
  const [category, setCategory] = useState('all');

  return (
    <BodyLayout page="portfolio">
      {/* current page desc section start*/}
      <PageHeading heading="Portfolio" subHeading="" />
      {/* current page desc section end*/}
      <div className="grid grid-flow-row mb-20  mx-4 sm:mx-8 lg:mx-10 2xl:mx-auto max-w-maxContentWid">
        <div className="  2xl:mx-auto my-10  grid grid-flow-row">
          {/* option display start */}
          <div className="my-10 text-center grid sm:grid-flow-col sm:ml-auto  gap-2 lg:gap-5  text-textColor1 dark:text-textColor1Dark text-xs">
            <div className='grid grid-cols-3 sm:grid-flow-col gap-2 lg:gap-5 '>
              <div
                className="cursor-pointer "
                onClick={() => setCategory(categoryEnum.all)}
              >
                {category === categoryEnum.all ? (
                  <div className="opacity-100">All</div>
                ) : (
                  <div className="opacity-50 hover:opacity-100">All</div>
                )}
              </div>
              <div
                className="cursor-pointer hover:opacity-100 "
                onClick={() => setCategory(categoryEnum.mobileApp)}
              >
                {' '}
                {category === categoryEnum.mobileApp ? (
                  <div className="opacity-100">Mobile App</div>
                ) : (
                  <div className="opacity-50 hover:opacity-100">Mobile App</div>
                )}
              </div>
              <div
                className="cursor-pointer hover:opacity-100 "
                onClick={() => setCategory(categoryEnum.webapp)}
              >
                {' '}
                {category === categoryEnum.webapp ? (
                  <div className="opacity-100">Web App</div>
                ) : (
                  <div className="opacity-50 hover:opacity-100">Web App</div>
                )}
              </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-flow-col gap-2 lg:gap-5 '>
              <div
                className="cursor-pointer hover:opacity-100 "
                onClick={() => setCategory(categoryEnum.ui_ux_design)}
              >
                {' '}
                {category === categoryEnum.ui_ux_design ? (
                  <div className="opacity-100">UI/UX Design</div>
                ) : (
                  <div className="opacity-50 hover:opacity-100">
                    UI/UX Design
                  </div>
                )}
              </div>
              <div
                className="cursor-pointer hover:opacity-100 "
                onClick={() => setCategory(categoryEnum.fullStack)}
              >
                {' '}
                {category === categoryEnum.fullStack ? (
                  <div className="opacity-100">Fullstack</div>
                ) : (
                  <div className="opacity-50 hover:opacity-100">Fullstack</div>
                )}
              </div>
              <div
                className="cursor-pointer hover:opacity-100"
                onClick={() => setCategory(categoryEnum.website)}
              >
                {' '}
                {category === categoryEnum.website ? (
                  <div className="opacity-100">Website</div>
                ) : (
                  <div className="opacity-50 hover:opacity-100">Website</div>
                )}
              </div>
            </div>
          </div>
          {/* option display end */}
          {/* portfolio display start */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <ShowcaseDisplay category={category} categoryEnum={categoryEnum} />
          </div>
          {/* portfolio display start */}
        </div>
      </div>
    </BodyLayout>
  );
}
