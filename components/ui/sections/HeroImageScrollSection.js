import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';
import TabPanel from '../../TabPanel';
import Image from 'next/image';
import { useTheme } from '@mui/material';
import heroImage from './../../../public/landing/001-ideation.svg'
import heroImage1 from './../../../public/landing/002-creative-team.svg'
import heroImage2 from './../../../public/landing/003-development.svg'

const EnhancedSwipeableViews = autoPlay(bindKeyboard(SwipeableViews));

export default function HeroImageScrollSection() {
    const theme = useTheme();
    const [pageNumber, setPageNumber] = useState(0);


    return (
    <EnhancedSwipeableViews
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'ltr' ? 'x' : 'x'}
    index={pageNumber}
    onChangeIndex={(index) => {
      setPageNumber(index);
    }}
    style={{ transition: '2.15s ease' }}
    enableMouseEvents={true}
    className="duration-1000 h-max "
    slideClassName="transition-all ease-in-out duration-1000 h-max"
  >
    <TabPanel
      value={pageNumber}
      index={0}
      dir={theme.direction === 'rtl' ? 'x-reverse' : 'ltr' ? 'x' : 'x'}
      className=" "
    >

<Image
                    priority
                    className="relative m-auto object-cover w-96 p-5 overflow-visible"
                    alt="Hero image"
                    src={heroImage}
                  />
    </TabPanel>
    <TabPanel
      value={pageNumber}
      index={1}
      dir={theme.direction === 'rtl' ? 'x-reverse' : 'ltr' ? 'x' : 'x'}
      className=" "
    >
                  <Image
                  priority
                  className="relative m-auto object-cover w-96 p-5 overflow-visible"
                  alt="Hero image"
                  src={heroImage1}
                />

    </TabPanel>
    <TabPanel
      value={pageNumber}
      index={2}
      dir={theme.direction === 'rtl' ? 'x-reverse' : 'ltr' ? 'x' : 'x'}
      className=" "
    >
                  <Image
                  priority
                  className="relative m-auto object-cover w-96 p-5 overflow-visible"
                  alt="Hero image"
                  src={heroImage2}
                />

    </TabPanel>
    </EnhancedSwipeableViews>
  )
}
