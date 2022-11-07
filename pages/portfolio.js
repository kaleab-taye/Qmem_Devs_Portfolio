import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import BodyLayout from '../components/ui/BodyLayout';
import PageHeading from '../components/ui/PageHeading';
import ShowcaseItem from '../components/ui/ShowcaseItem';
import testImage from './../public/axumWgrad.jpg';

export default function portfolio() {
  return (
    <BodyLayout>
      {/* current page desc section start*/}
      <PageHeading heading="Portfolio" subHeading="" />
      {/* current page desc section end*/}

      <div className="max-w-maxContentWid mx-10 2xl:mx-auto my-10  grid grid-flow-row">
        {/* category option start*/}
        <div className="	 grid grid-flow-col ml-auto  gap-5 my-8 text-textColor1 text-xs opacity-50">
          <div>All</div>
          <div className="">Mobile App</div>
          <div>Web App</div>
          <div>UI/UX Design</div>
          <div>Fullstack</div>
          <div>Website</div>
        </div>
        {/* category option end*/}
        {/* portfolio display start */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 ">
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
          <ShowcaseItem img={testImage} />
        </div>
        {/* portfolio display start */}
      </div>
    </BodyLayout>
  );
}
