import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faEarthAmericas,
  faGlobe,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, useTheme } from '@mui/material';
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

import TestimonialCard from './TestimonialCard';
import CustomPagination from './CustomPagination';

const EnhancedSwipeableViews = autoPlay(bindKeyboard(SwipeableViews));
export default function ShowcaseOverlay({
  isOverlayOpen,
  setOverlayOpenState,
  key,
  item,
}) {
  const theme = useTheme();
  const [autoScrollImageCanvasIndex, setAutoScrollImageCanvasIndex] =
    useState(0);

  useEffect(() => {
    document.body.style.height = 0;
  }, []);
  return (
    <>
      {/* {isOverlayOpen ? (
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
          > */}
      <Drawer
        anchor={'top'}
        open={isOverlayOpen}
        onClose={() => setOverlayOpenState(false)}
        PaperProps={{
          className:
            'bg-background1 dark:bg-background1Dark text-textColor1 dark:text-textColor1Dark  w-full',
        }}
      >
        <div className=" h-[100vh] bg-background1 dark:bg-background1Dark w-full h-full  top-0 left-0 grid">
          <div className=" max-w-maxHeroWid mx-4 sm:mx-10 2xl:mx-auto my-5  grid grid-flow-row md:gap-5 mb-auto">
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

            <div className="bg-red500 grid md:grid-cols-3 text-textColor1 dark:text-textColor1Dark gap-5 lg:gap-10 ">
              <div className="md:col-span-2 grid gap-5 sm:gap-10 ">
                <div className="font-bold text-[32px] mb-auto">{item.name}</div>
                {/* scrolling image canvas start */}
                <div className='grid '>
                  <div className="grid">
                    <EnhancedSwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={autoScrollImageCanvasIndex}
                      onChangeIndex={(index) => {
                        setAutoScrollImageCanvasIndex(index);
                      }}
                      style={{ transition: '2.15s ease' }}
                      enableMouseEvents = {true}
                      className="duration-1000 shadow-md"
                      slideClassName="transition-all ease-in-out duration-1000"
                    >
                      {item.otherImages.map((image) => (
                        <TabPanel
                          value={autoScrollImageCanvasIndex}
                          index={item.otherImages.indexOf(image)}
                          // dir={theme.direction}
                          className=""
                          key={item.otherImages.indexOf(image)}
                          dir={theme.direction === 'rtl' ? 'x-reverse' : 'ltr' ? 'x' : 'x'}

                        ><div className=''>

                          <Image src={image} alt="image" className='' />
                        </div>
                        </TabPanel>
                      ))}
                     
                    </EnhancedSwipeableViews>
                    <div className="m-auto">
                      <CustomPagination
                        length={item.otherImages.length}
                        currentIndex={autoScrollImageCanvasIndex}
                        currentIndexSetter={setAutoScrollImageCanvasIndex}
                      />
                    </div>
                  </div>
                </div>
                {/* scrolling image canvas end */}
                <div className='text-[16px] font-medium text-justify'>{item.blog}</div>{' '}
              </div>
              {/* information box start */}
              <div className=" bg-blue500 grid ">
                <div className="mb-auto border-2 border-background2 dark:border-background2Dark bg-background3 dark:bg-background3Dark rounded-2xl p-6 lg:p-8 grid gap-4">
                  {/* description start */}
                  <div className="grid gap-3 ">
                    <div className="font-bold text-[18px]">Description</div>
                    <div className="grid gap-2">
                      {/* customer type start */}
                      <div className="grid grid-flow-col gap-2 mr-auto">
                        <FontAwesomeIcon
                          className="w-[16px] my-auto text-accentColor dark:text-accentColorDark"
                          icon={faUser}
                        />
                        <div className="text-sm font-medium my-auto opacity-80">
                          {item.customer}
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
                          {item.date}
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
                          href={item.link}
                          rel="noopener noreferrer"
                        >
                          <div className="text-sm font-medium ">
                            {item.link}
                          </div>
                        </a>
                      </div>
                      {/* website link end */}
                    </div>
                  </div>
                  <div className="text-md font-medium my-auto opacity-90">
                    {item.description}
                  </div>
                  {/* what we did start */}
                  <div className="grid gap-3 ">
                    <div className="font-bold text-[18px]">We Did</div>
                    <div className="flex gap-2 justify-start flex-wrap">
                      {item.category.map((category) => (
                        <div
                          key={item.category.indexOf(category)}
                          className="text-sm p-1 text-textColor2 dark:text-textColor2Dark rounded bg-background2 dark:bg-background2Dark "
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* what we did end */}

                  {/* technology start */}
                  <div className="grid gap-3 ">
                    <div className="font-bold text-[18px]">Technology</div>
                    <div className="flex gap-2 justify-start flex-wrap">
                      {item.technologies.map((tech) => (
                        <div
                          key={item.technologies.indexOf(tech)}
                          className="text-sm p-1 text-textColor2 dark:text-textColor2Dark rounded bg-background2 dark:bg-background2Dark "
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* technology end */}
                  <div className="grid gap-3 ">
                    <div className="font-bold text-[18px]">Share</div>
                    <div className="grid mr-auto gap-2 grid-cols-auto grid-rows-auto grid-flow-col overflow- ">
                      <a
                        target="_blank"
                        href="https://facebook.com"
                        rel="noopener noreferrer"
                      >
                        <div className="  text-textColor2 dark:textColor2Dark hover:text-textColor1 dark:hover:text-textColor1Dark m-auto grid">
                          <FontAwesomeIcon
                            className="m-auto w-[26px] h-[26px]"
                            icon={faSquareFacebook}
                          />
                        </div>
                      </a>
                      <a
                        target="_blank"
                        href="https://linkedin.com"
                        rel="noopener noreferrer"
                      >
                        <div className="  text-textColor2 dark:textColor2Dark hover:text-textColor1 dark:hover:text-textColor1Dark m-auto grid">
                          <FontAwesomeIcon
                            className="m-auto w-[26px] h-[26px]"
                            icon={faLinkedin}
                          />
                        </div>
                      </a>
                      <a
                        target="_blank"
                        href="https://instagram.com"
                        rel="noopener noreferrer"
                      >
                        <div className="  text-textColor2 dark:textColor2Dark hover:text-textColor1 dark:hover:text-textColor1Dark m-auto grid">
                          <FontAwesomeIcon
                            className="m-auto w-[26px] h-[26px]"
                            icon={faInstagram}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* description box end */}
                </div>
              </div>
              {/* information box end */}

            </div>
            <div className='h-3 sm:h-10'>
            {/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbthpWbwh5ARUNlynm3vcml%2FShuk-Shukta-Blogs-Ui-design%3Fnode-id%3D0%253A1%26t%3DrpTlLxnNRyXJz0CF-1" allowfullscreen></iframe> */}
            </div>
          </div>
        </div>
      </Drawer>
      {/* </motion.div>
        </AnimatePresence>
      ) : null} */}
    </>
  );
}
