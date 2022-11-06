import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import BodyLayout from '../components/ui/BodyLayout';
import PageHeading from '../components/ui/PageHeading';
import testImage from './../public/axumWgrad.jpg';

export default function portfolio() {
  return (
    <BodyLayout>
      {/* current page desc section start*/}
      <PageHeading heading="Portfolio" subHeading="" />
      {/* current page desc section end*/}

      <div className="max-w-maxContentWid mx-10 2xl:mx-auto my-10  grid grid-flow-row">
        {/* category option start*/}
        <div className="	 grid grid-flow-col ml-auto  gap-5 my-auto text-textColor1 text-xs opacity-50">
          <div>All</div>
          <div className="">Mobile App</div>
          <div>Web App</div>
          <div>UI/UX Design</div>
          <div>Fullstack</div>
          <div>Website</div>
        </div>
        {/* category option end*/}
        {/* portfolio display start */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-2 ">
          <div className="relative grid grid-flow-col rounded-lg overflow-hidden ">
            <Image
              className="transition-all hover:z-0 duration-700 object-cover hover:scale-125   "
              src={testImage}
              alt="port image"
            />
            <div className=" absolute text-sm font-bold bg-background1 mt-2 z-100 ml-2 rounded text-textColor1 py-1 px-2">
              Shuk-Shukta-Blogs
            </div>
            <div className="grid grid-flow-col text-textColor1 absolute bottom-0 mb-2 text-xs font-bold bg-background1 mt-10 z-100 ml-1 text-textColor1 py-1 px-2">
              blogging and idea sharing site
            </div>
            <div className="absolute bottom-0 right-0 mr-2 mb-2">
              <FontAwesomeIcon className="" icon={faLink} />
            </div>
          </div>
          <div className=" rounded-lg overflow-hidden ">
            <Image
              className="transition-all duration-700 object-cover hover:scale-125   "
              src={testImage}
              alt="port image"
            />
          </div>
          <div className=" rounded-lg overflow-hidden ">
            <Image
              className="transition-all duration-700 object-cover hover:scale-125   "
              src={testImage}
              alt="port image"
            />
          </div>
        </div>
        {/* portfolio display start */}
      </div>
    </BodyLayout>
  );
}
