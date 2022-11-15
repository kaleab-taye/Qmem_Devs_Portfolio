import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logoImage from '../../public/Logo.png';
import ThemeSwitchIcon from './ThemeSwitchIcon';

export default function Navbar({ page }) {
  const [drawerState, setDrawerState] = useState(false);
  const activeClass = ' py-3 px-2 opacity-90 text-textColor1 dark:text-textColor1Dark font-bold';
  const inactiveClass =
    'font-medium py-3 px-2 opacity-70 text-textColor2 dark:text-textColor2Dark hover:opacity-100 cursor-pointer font-medium ';

  const pages = [
    { id: 'home', name: 'Home', path: '/', class: '' },
    { id: 'resume', name: 'Resume', path: '/resume', class: '' },
    { id: 'portfolio', name: 'Portfolio', path: '/portfolio', class: '' },
    { id: 'blogs', name: 'Blogs', path: '/blogs', class: '' },
    { id: 'contact', name: 'Contact Us', path: '/contact', class: '' },
    // { id: 'hire', name: 'Hire Us', path: '/hire', class: '' },
  ];

  return (
    <div className=" grid grid-flow-col lg:mx-10 mx-2 py-2 lg:py-6 ">
      {/* logo and name start */}
      <div className=" text-textColor1 dark:text-textColor1Dark mr-auto my-auto text-xl grid grid-flow-col my-auto">
        <Link href="/">
          <Image className="w-14 rounded-full" src={logoImage} alt="logo" />
        </Link>
        <div className="my-auto ml-2 font-medium  ">
          <Link href="/">
            <span>
              <span className="font-bold drop-shadow-xl drop-shadow-accentColor dark:drop-shadow-accentColorDark">
                Qmem
              </span>{' '}
              Developers
            </span>
          </Link>
        </div>
      </div>
      {/* logo and name start */}

      <div className="text-sm hidden lg:grid grid-flow-col ml-auto gap-6 xl:gap-12 my-auto text-textColor3 dark:text-textColor3Dark ">
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
        <div className="relative grid my-auto">
          <div className="font-bold text-[magenta,cyan] z-10 my-auto rounded-xl  py-2 px-3 text-textColor1 dark:text-textColor1Dark ">
            Hire us
          </div>
          <div className="hireAnim1 z-0 shadow-[0px_0px_8px_0.25px_magenta] shadow-magenta absolute rounded-xl bg-gree w-full h-full"></div>
          <div className="hireAnim2 z-0 shadow-[0px_0px_8px_0.25px_textColor1] dark:shadow-[0px_0px_8px_0.25px_textColor1Dark] shadow-accentColor dark:shadow-accentColorDark absolute rounded-xl bg-gree w-full h-full"></div>
        </div>
        {/* theme switch start */}
        <div className="my-auto ml-auto">
          <ThemeSwitchIcon />
        </div>
        {/* theme switch end */}
      </div>
      {/* menu start */}
      <div
        className="block lg:hidden ml-auto my-auto cursor-pointer"
        onClick={() => setDrawerState(true)}
      >
        <FontAwesomeIcon
          className="w-6 h-6 text-textColor1 dark:text-textColor1Dark opacity-80  font-extrabold m-auto"
          icon={faBars}
        />
      </div>
      {/* menu drawer start */}
      <Drawer
        anchor={'right'}
        open={drawerState}
        onClose={() => setDrawerState(false)}
        PaperProps={{
          className:
            'bg-background1 dark:bg-background1Dark text-textColor1 dark:text-textColor1Dark pl-5',
        }}
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
            {/* theme switch start */}
            <div
              className={
                inactiveClass +
                ' ' +
                'mr-auto grid grid-flow-col gap-2 w-fit group'
              }
            >
              <ThemeSwitchIcon />
            </div>
            {/* theme switch end */}
          </div>
        </Box>
      </Drawer>
      {/* menu end */}
    </div>
  );
}
