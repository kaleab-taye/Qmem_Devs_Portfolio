import Image from 'next/image';
import logoImage from '../../public/Logo.png';
import FooterSection from './sections/FooterSection';

export default function BodyLayout({ children, page }) {
  return (
    <div className="bg-background1 grid grid-flow-row my-auto  gap-2">
      {/* nav bar */}
      <div className=" grid grid-flow-col lg:mx-10 mx-5 py-2 lg:py-6 my-auto">
        <div className=" text-textColor1 mr-auto my-auto text-xl grid grid-flow-col my-auto">
          <Image className="w-16 rounded-full" src={logoImage} alt="logo" />
          <div className="my-auto ml-2 font-medium">
            <span className="font-bold">Qmem</span> Developers
          </div>
        </div>{' '}
        <div className="text-sm hidden lg:grid grid-flow-col ml-auto gap-12 my-auto text-textColor3 ">
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Home
          </div>
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Resume
          </div>
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Portfolio
          </div>
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Blog
          </div>
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Contact
          </div>
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Hire Us
          </div>
        </div>
        <div className="block lg:hidden ml-auto my-auto">menu</div>
      </div>
      <div className="mx-auto">
        <div className="grid max-w-maxContentWid   mx-10 2xl:mx-0">{children}</div>
      </div>

      <FooterSection className='  mx-10 '/>
    </div>
  );
}
