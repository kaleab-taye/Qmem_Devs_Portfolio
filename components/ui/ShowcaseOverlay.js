import {
  faFacebook,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faCalendar,
  faEarthAmericas,
  faGlobe,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  autoPlay,
  virtualize,
  bindKeyboard,
} from 'react-swipeable-views-utils';
import TabPanel from '../TabPanel';

import testImage from './../../public/axumWgrad.jpg';
import testImage1 from './../../public/Logo.png';
import TestimonialCard from './TestimonialCard';

export default function ShowcaseOverlay({
  isOverlayOpen,
  setOverlayOpenState,
  key,
}) {
  const theme = useTheme();
  const EnhancedSwipeableViews = autoPlay(bindKeyboard(SwipeableViews));
  const [autoScrollImageCanvasIndex, setAutoScrollImageCanvasIndex] =
    useState(0);
  return (
    <>
      {isOverlayOpen ? (
        <AnimatePresence>
          <motion.div
            key={key}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            variants={{
              initial: {
                // x: '0',
                //   width: 0,
                originX: '0',
              },
              animate: {
                // x: '0',
                // opacity: 1,
                //   width: 'auto',
                originX: '1',
              },
            }}
          >
            <div className="fixed z-40   bg-background1 dark:bg-background1Dark w-full h-full  top-0 left-0 grid">
              <div className=" max-w-maxHeroWid mx-10 2xl:mx-auto my-5  grid grid-flow-row gap-5 mb-auto">
                {/* close icon start */}
                <div
                  className="ml-auto bg-background3 dark:bg-background3Dark  grid p-2 rounded cursor-pointer"
                  onClick={() => setOverlayOpenState(false)}
                >
                  <FontAwesomeIcon
                    className="text-textColor1 dark:text-textColor1Dark opacity-60 w-[23px] h-[23px] m-auto"
                    icon={faXmark}
                  />
                </div>
                {/* close icon end */}

                <div className="grid grid-flow-row md:grid-cols-3 text-textColor1 dark:text-textColor1Dark gap-5 lg:gap-10">
                  <div className="col-span-2">
                    <div className="font-bold text-[32px]">
                      Shuk-Shukta Blogs
                    </div>
                    {/* scrolling image canvas start */}
                    <div>
                      <div className="grid ">
                        <EnhancedSwipeableViews
                          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                          index={autoScrollImageCanvasIndex}
                          onChangeIndex={(index) => {
                            setAutoScrollImageCanvasIndex(index);
                          }}
                          style={{ transition: '2.15s ease' }}
                          enableMouseEvents
                          className="duration-1000"
                          slideClassName=" transition-all ease-in-out duration-1000"
                        >
                          <TabPanel
                            value={autoScrollImageCanvasIndex}
                            index={0}
                            dir={theme.direction}
                            className=" "
                          >
                            <Image src={testImage1} alt="image" />
                          </TabPanel>
                          <TabPanel
                            value={autoScrollImageCanvasIndex}
                            index={1}
                            dir={theme.direction}
                          >
                            <Image src={testImage} alt="image" />
                          </TabPanel>
                        </EnhancedSwipeableViews>
                      </div>
                    </div>
                    {/* scrolling image canvas end */}
                  </div>
                  {/* information box start */}
                  <div className="border-2 border-background2 dark:border-background2Dark bg-background3 dark:bg-background3Dark rounded-2xl p-8 grid gap-4">
                    {/* description start */}
                    <div className="grid gap-3 overflow-hidden">
                      <div className="font-bold text-[18px]">Description</div>
                      <div className="grid gap-2">
                        {/* customer type start */}
                        <div className="grid grid-flow-col gap-2 mr-auto">
                          <FontAwesomeIcon
                            className="w-[16px] my-auto text-accentColor dark:text-accentColorDark"
                            icon={faUser}
                          />
                          <div className="text-sm font-medium my-auto opacity-80">
                            Open source contribution
                          </div>
                        </div>
                        {/* customer type end */}

                        {/* calendar start */}
                        <div className="grid grid-flow-col gap-2 mr-auto">
                          <FontAwesomeIcon
                            className="w-[16px] my-auto text-accentColor dark:text-accentColorDark"
                            icon={faCalendarAlt}
                          />
                          <div className="text-sm font-medium my-auto opacity-80">
                            Jul 1 2009
                          </div>
                        </div>
                        {/* calendar end */}
                        {/* website link start */}
                        <div className="grid grid-flow-col gap-2 mr-auto text-accentColor dark:text-accentColorDark">
                          <FontAwesomeIcon
                            className="w-[16px] my-auto "
                            icon={faEarthAmericas}
                          />
                          <a
                            target="_blank"
                            href="https://shuk-shukta-blogs.vercel.app"
                            rel="noopener noreferrer"
                          >
                            <div className="text-sm font-medium ">
                              shuk-shukta-blogs.vercel.app
                            </div>
                          </a>
                        </div>
                        {/* website link end */}
                      </div>
                    </div>
                    <div className="text-md font-medium my-auto opacity-90">
                      Fusce pellentesque felis turpis, blandit efficitur ante
                      sodales eu. Vivamus eu tempor lectus, ut faucibus lacus.
                      Nullam ut vehicula lorem, non scelerisque libero.
                    </div>
                    <div className="grid gap-3 overflow-hidden">
                      <div className="font-bold text-[18px]">Technology</div>
                      <div className="flex gap-2 justify-start flex-wrap">
                        <div className="text-sm p-1 text-textColor3 dark:text-textColor3Dark rounded bg-background2 dark:bg-background2Dark ">
                          Next Js
                        </div>
                        <div className="text-sm p-1 text-textColor3 dark:text-textColor3Dark rounded bg-background2 dark:bg-background2Dark ">
                          tailwindcss
                        </div>
                        <div className="text-sm p-1 text-textColor3 dark:text-textColor3Dark rounded bg-background2 dark:bg-background2Dark ">
                          Next Js
                        </div>
                        <div className="text-sm p-1 text-textColor3 dark:text-textColor3Dark rounded bg-background2 dark:bg-background2Dark ">
                          tailwindcss
                        </div>
                        <div className="text-sm p-1 text-textColor3 dark:text-textColor3Dark rounded bg-background2 dark:bg-background2Dark ">
                          Next Js
                        </div>
                        <div className="text-sm p-1 text-textColor3 dark:text-textColor3Dark rounded bg-background2 dark:bg-background2Dark ">
                          tailwindcss
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 overflow-hidden">
                      <div className="font-bold text-[18px]">Share</div>
                      <div className="grid mr-auto gap-2 grid-cols-auto grid-rows-auto grid-flow-col overflow- ">
                        <div className=" text-textColor3 dark:text-textColor3Dark   m-auto grid">
                          <FontAwesomeIcon
                            className="m-auto w-[26px] h-[26px]"
                            icon={faSquareFacebook}
                          />
                        </div>
                        <div className=" text-textColor3 dark:text-textColor3Dark   m-auto grid">
                          <FontAwesomeIcon
                            className="m-auto w-[26px] h-[26px]"
                            icon={faLinkedin}
                          />
                        </div>
                        <div className=" text-textColor3 dark:text-textColor3Dark   m-auto grid">
                          <FontAwesomeIcon
                            className="m-auto w-[26px] h-[26px]"
                            icon={faInstagram}
                          />
                        </div>
                      </div>
                    </div>
                    {/* description box end */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
}
