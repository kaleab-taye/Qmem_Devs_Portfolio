import ShowcaseItem from '../ShowcaseItem';
import { motion, AnimatePresence } from 'framer-motion';
import testImage from './../../../public/axumWgrad.jpg';
import { useEffect, useState } from 'react';
import { display } from '@mui/system';

export default function ShowcaseDisplay({ category }) {
  const data = [
    {
      image: testImage,
      name: 'Shuk-Shukta-Blogs',
      description: 'a platform to share ideas',
      category: 'webApp ',
      key: '123456789',
    },
    {
      image: testImage,
      name: 'Shuk-Shukta-Blogs',
      description: 'a platform to share ideas',
      category: 'webApp',
      key: 'fsgsfgsfsg',
    },
    {
      image: testImage,
      name: 'Shuk-Shukta-Blogs',
      description: 'a platform to share ideas',
      category: 'webApp',
      key: 'gsfgsgrewwthw',
    },
    {
      image: testImage,
      name: 'Shuk-Shukta-Blogs',
      description: 'a platform to share ideas',
      category: 'mobileApp',
      key: 'hshfgserrrrrrrrt',
    },
    {
      image: testImage,
      name: 'Shuk-Shukta-Blogs',
      description: 'a platform to share ideas',
      category: 'ui/ux fullstack',
      key: 'h45ssserwf',
    },
    {
      image: testImage,
      name: 'Shuk-Shukta-Blogs',
      description: 'a platform to share ideas',
      category: 'website',
      key: 'ethr45ethe',
    },
  ];

  const [display, setDisplay] = useState(data);

  useEffect(() => {
    if (category !== 'all') {
      console.log('k', category.indexOf('A') !== -1);
      const newData = data.filter(
        (item) => item.category.indexOf(category) !== -1
      );
      console.log('ll', newData);
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
            description={item.description}
            name={item.name}
            image={item.image}
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
