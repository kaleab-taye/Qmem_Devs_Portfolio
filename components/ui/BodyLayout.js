import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Navbar from './Navbar';
import FooterSection from './sections/FooterSection';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function BodyLayout({ children, page }) {
  const router = useRouter();
  return (
    <div className="min-h-screen grid grid-flow-row  pt-4">
      <div className=" gap-0 grid grid-flow-row gap-0 ">
        {/* nav bar */}
        <Navbar page={page} />
        {/* animate on page change */}
        {/* <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        variants={{
          initial: {
            opacity: 0,
            scale: 1.5,
          },
          animate: {
            opacity: 1,
            scale: 1,
          },
        }}
      > */}
        <div className="grid  ">
          <div className="grid ">{children}</div>
        </div>
        {/* </motion.div> */}
      </div>
      <FooterSection className="" />
    </div>
  );
}
