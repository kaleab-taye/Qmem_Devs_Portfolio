import {
  Pagination,
  PaginationItem,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import usePagination from '@mui/material/usePagination';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import SwipeableViews from 'react-swipeable-views';
import {
  autoPlay,
  virtualize,
  bindKeyboard,
} from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material';
import TabPanel from '../../TabPanel';

import CustomizedPagination from '../CustomizedPagination';
import PartialUnderline from '../PartialUnderline';
import TestimonialCard from '../TestimonialCard';
import CustomPagination from '../CustomPagination';

const EnhancedSwipeableViews = autoPlay(bindKeyboard(SwipeableViews));
export default function TestimonialSection() {
  const [pageNumber, setPageNumber] = useState(0);
  const theme = useTheme();
useEffect(()=>{
  console.log('tt',theme.direction)
},[theme.direction])
  return (
    <div className="grid grid-flow-row gap-8 ">
      <div>
        <PartialUnderline text="Testimonials" />
      </div>
      <div>
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
            className=" mx-auto"
          >
            <span className="mx-auto grid grid-flow-row md:grid-flow-col  -m-6">
              <TestimonialCard by="Yonael Biniam" />
            </span>
          </TabPanel>
          <TabPanel
            value={pageNumber}
            index={1}
            dir={theme.direction === 'rtl' ? 'x-reverse' : 'ltr' ? 'x' : 'x'}
            className=" mx-auto"
          >
            <span className="mx-auto grid grid-flow-row md:grid-flow-col  -m-6">
              <TestimonialCard by="Yonael Biniam" />
            </span>
          </TabPanel>
          <TabPanel 
            value={pageNumber}
            index={2} 
            dir={theme.direction === 'rtl' ? 'x-reverse' : 'ltr' ? 'x' : 'x'}
          >
            <span className=" grid grid-flow-row md:grid-flow-col  -m-6">
              <TestimonialCard by="Eyob Mekonen" />
            </span>
          </TabPanel>
        </EnhancedSwipeableViews>
        <div className="m-auto">
          <CustomPagination
            length={3}
            currentIndex={pageNumber}
            currentIndexSetter={setPageNumber}
          />
        </div>
      </div>
      <div className="mx-auto">
        {/* <CustomizedPagination
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          count={4}
        /> */}
      </div>
    </div>
  );
}
