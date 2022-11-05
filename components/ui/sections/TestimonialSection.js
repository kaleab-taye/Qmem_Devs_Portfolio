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
import { duration, useTheme } from '@mui/material/styles';
import CustomizedPagination from '../CustomizedPagination';
import PartialUnderline from '../PartialUnderline';
import TestimonialCard from '../TestimonialCard';

export default function TestimonialSection() {
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  const [pageNumber, setPageNumber] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    console.log(pageNumber);
  }, [pageNumber]);
  return (
    <div className="grid grid-flow-row gap-8 ">
      <div>
        <PartialUnderline text="Testimonials" />
      </div>
      <div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={pageNumber}
          onChangeIndex={(index) => {
            setPageNumber(index);
          }}
        >
          <TabPanel
            value={pageNumber}
            index={0}
            dir={theme.direction}
            className=" "
          >
            <span className=" grid grid-flow-row md:grid-flow-col  -m-6">
              <TestimonialCard by="Yonael Biniam" />
              <TestimonialCard by="Amanuel Reta" />{' '}
            </span>
          </TabPanel>
          <TabPanel value={pageNumber} index={1} dir={theme.direction}>
            <span className=" grid grid-flow-row md:grid-flow-col  -m-6">
              <TestimonialCard by="Eyob Mekonen" />
              <TestimonialCard by="Abel Tesema" />{' '}
            </span>
          </TabPanel>
        </SwipeableViews>
        <Tabs
          value={pageNumber}
          aria-label=""
          onChange={(e, index) => {
            setPageNumber(index);
          }}
          centered
        >
          <span
            className="my-auto border-b w-8 py-6 m-1  cursor-pointer"
            value={0}
            onClick={() => {
              setPageNumber(0);
            }}
          ></span>

          <span
            className="my-auto border-b w-8 py-6 m-1 cursor-pointer"
            value={1}
            onClick={() => {
              setPageNumber(1);
            }}
          ></span>
        </Tabs>
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
