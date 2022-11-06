import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImage from '../../public/Logo.png';

export default function Navbar() {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <div className=" grid grid-flow-col lg:mx-10 mx-5 py-2 lg:py-6 ">
      <div className=" text-textColor1 mr-auto my-auto text-xl grid grid-flow-col my-auto">
        <Image className="w-14 rounded-full" src={logoImage} alt="logo" />
        <div className="my-auto ml-2 font-medium">
          <span className="font-bold">Qmem</span> Developers
        </div>
      </div>{' '}
      <div className="text-sm hidden lg:grid grid-flow-col ml-auto gap-12 my-auto text-textColor3 ">
        <Link href="/">
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Home
          </div>
        </Link>
        <Link href="/resume">
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Resume
          </div>
        </Link>
        <Link href="/portfolio">
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Portfolio
          </div>
        </Link>
        <Link href="/blog">
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Blog
          </div>
        </Link>
        <Link href="/contact">
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Contact
          </div>
        </Link>
        <Link href="/">
          <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
            Hire Us
          </div>
        </Link>
      </div>
      <div
        className="block lg:hidden ml-auto my-auto cursor-pointer"
        onClick={() => setDrawerState(true)}
      >
        <FontAwesomeIcon
          className="w-6 h-6 text-textColor1 opacity-80  font-extrabold m-auto"
          icon={faBars}
        />
      </div>
      <Drawer
        anchor={'right'}
        open={drawerState}
        onClose={() => setDrawerState(false)}
        PaperProps={{ className: 'bg-background1 text-textColor1 pl-5' }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerState(false)}
          onKeyDown={() => setDrawerState(false)}
        >
        <Link href="/">
        <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
          Home
        </div>
      </Link>
      <Link href="/resume">
        <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
          Resume
        </div>
      </Link>
      <Link href="/portfolio">
        <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
          Portfolio
        </div>
      </Link>
      <Link href="/blog">
        <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
          Blog
        </div>
      </Link>
      <Link href="/contact">
        <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
          Contact
        </div>
      </Link>
      <Link href="/">
        <div className="transition ease-in-out delay-75 opacity-60 hover:opacity-100 py-3 px-2 cursor-pointer">
          Hire Us
        </div>
      </Link>
        </Box>
      </Drawer>
    </div>
  );
}
