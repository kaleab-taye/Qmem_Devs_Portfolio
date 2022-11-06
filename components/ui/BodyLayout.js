import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Navbar from './Navbar';
import FooterSection from './sections/FooterSection';

export default function BodyLayout({ children, page }) {
  return (
    <div className="bg-background1 gap-0 grid grid-flow-row my-auto  gap-2">
      {/* nav bar */}
      <Navbar />
      <div className="grid ">
        <div className="grid ">{children}</div>
      </div>

      <FooterSection className="  mx-10 " />
    </div>
  );
}
