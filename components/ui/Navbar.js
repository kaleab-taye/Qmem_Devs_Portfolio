import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImage from '../../public/Logo.png';

export default function Navbar({ page }) {
  const [drawerState, setDrawerState] = useState(false);
  const activeClass = ' py-3 px-2 opacity-100 font-bold';
  const inactiveClass =
    'font-medium py-3 px-2 opacity-60 hover:opacity-100 cursor-pointer ';

  const pages = [
    { id: 'home', name: 'Home', path: '/', class: '' },
    { id: 'resume', name: 'Resume', path: '/resume', class: '' },
    { id: 'portfolio', name: 'Portfolio', path: '/portfolio', class: '' },
    { id: 'blogs', name: 'Blogs', path: '/blogs', class: '' },
    { id: 'contact', name: 'Contact Us', path: '/contact', class: '' },
    { id: 'hire', name: 'Hire Us', path: '/hire', class: '' },
  ];

  return (
    <div className=" grid grid-flow-col lg:mx-10 mx-5 py-2 lg:py-6 ">
      {/* logo and name start */}
      <div className=" text-textColor1 mr-auto my-auto text-xl grid grid-flow-col my-auto">
        <Link href="/">
          <Image className="w-14 rounded-full" src={logoImage} alt="logo" />
        </Link>
        <div className="my-auto ml-2 font-medium  ">
          <Link href="/">
            <span>
              <span className="font-bold drop-shadow-xl drop-shadow-accentColor ">
                Qmem
              </span>{' '}
              Developers
            </span>
          </Link>
        </div>
      </div>
      {/* logo and name start */}
      <div className="text-sm hidden lg:grid grid-flow-col ml-auto gap-12 my-auto text-textColor3 ">
        {pages.map((item) => (
          <Link href={item.path} key={item.id}>
            <div className={`transition ease-in-out `}>
              {page === item.id ? (
                <div className={activeClass}>{item.name}</div>
              ) : (
                <div className={inactiveClass}>{item.name}</div>
              )}
            </div>
          </Link>
        ))}
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
        PaperProps={{ className: 'bg-background1  text-textColor1 pl-5' }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerState(false)}
          onKeyDown={() => setDrawerState(false)}
        >
          <div className=" mt-5">
            {pages.map((item) => (
              <Link href={item.path} key={item.id}>
                <div className={`transition ease-in-out `}>
                  {page === item.id ? (
                    <div className={activeClass}>{item.name}</div>
                  ) : (
                    <div className={inactiveClass}>{item.name}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
