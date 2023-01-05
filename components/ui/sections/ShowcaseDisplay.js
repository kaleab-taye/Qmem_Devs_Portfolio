import ShowcaseItem from '../ShowcaseItem';
import { motion, AnimatePresence } from 'framer-motion';
import testImage from './../../../public/axumWgrad.jpg';
import shuk_shukta_001 from './../../../public/shuk-shukta-blogs/001.png';
import shuk_shukta_002 from './../../../public/shuk-shukta-blogs/002.png';
import shuk_shukta_003 from './../../../public/shuk-shukta-blogs/003.png';
import angels_touch_001 from './../../../public/angels-touch/001.png';
import angels_touch_002 from './../../../public/angels-touch/002.png';
import angels_touch_003 from './../../../public/angels-touch/003.png';
import angels_touch_004 from './../../../public/angels-touch/004.png';
import angels_touch_005 from './../../../public/angels-touch/005.png';

import { useEffect, useState } from 'react';
import { display } from '@mui/system';

export default function ShowcaseDisplay({ category,categoryEnum }) {
  const data = [
    {
      image: shuk_shukta_001,
      name: 'Shuk-Shukta-Blogs',
      meta: 'a blogging platform',
      description: 'User friendly, SEO optimized and highly performant blogging site.',
      category: [categoryEnum.webapp,categoryEnum.ui_ux_design],
      key: '123456789',
      otherImages: [shuk_shukta_001,shuk_shukta_002,shuk_shukta_003],
      technologies: ['Next Js','Tailwind Css'],
      customer: 'Open Source Contribution',
      date : 'September 5 2022',
      link : 'https://shuk-shukta-blogs.vercel.app/',
      blog : 'shuk-shukta-blogs is a free blogging site where anyone can blog posts and get interaction from everyone reading it. \n We did this project when we were experimenting with websites search engine optimization and technologies that are best suited for platforms such as that.'
      
    },{
      image: angels_touch_001,
      name: 'Angel’s Touch Adult Family Home',
      meta: 'adult home care website',
      description: 'A profile showcase website for adult home care company located in US Spokan Valley',
      category: [categoryEnum.website,categoryEnum.ui_ux_design],
      key: 'angels_touch_123456',
      otherImages: [angels_touch_001,angels_touch_002,angels_touch_003,angels_touch_004,angels_touch_005],
      technologies: ['Wordpress'],
      customer: 'Adult Home Care Company',
      date : 'August 5 2022',
      link : 'https://angelstouchafh.com/',
      blog : "We designed this website to enable it's potential customers have an insight to their organization. we have tried to incorporate as much detail as possible about the services they provide with much consideration on the user interface and experience"
      
    }
   
  ];

  const [display, setDisplay] = useState(data);

  useEffect(() => {
    if (category !== 'all') {
      // console.log('k',category,data, category.indexOf('A') !== -1);
      const newData = data.filter(
        (item) => item.category.indexOf(category) !== -1
      );
      // console.log('ll', newData);
      setDisplay((e) => newData);
    } else {
      setDisplay((e) => data);
    }
  }, [category]);

  return (
    <AnimatePresence>
      {display.map((item) => (
        <motion.div
          layout
          key={item.key}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShowcaseItem
            key={item.key}
            item={item}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

// <AnimatePresence initial={false}>
// <motion.div
//   initial={{ scale: 0 }}
//   animate={{ scale: 1 }}
//   exit={{ scale: 0, opacity: 0 }}
//   transition={{ duration: 0.8 }}
// >
//   <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 ">
//     {display.map((item) => (
//       <motion.div
//         key={item.key}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         exit={{ scale: 0, opacity: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <ShowcaseItem
//           description={item.description}
//           name={item.name}
//           image={item.image}
//         />
//       </motion.div>
//     ))}
//   </div>
// </motion.div>
// </AnimatePresence>

// old animation
// initial={{ width: 0,marginRight:'auto' , }}
//           animate={{ width: 'auto' }}
//           exit={{ width: 0, opacity: 0,duration:0 }}
//           transition={{ duration: 0.8 }}

// {data.filter((item) => (
//     <ShowcaseItem
//       key={Math.random()}
//       description={item.description}
//       name={item.name}
//       image={item.image}
//     />
//   ))}
