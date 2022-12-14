import Head from 'next/head';
import Image from 'next/image';
import backendPng from '../public/icons/backend.png';
import BodyLayout from '../components/ui/BodyLayout';
import styles from '../styles/Home.module.css';
import heroImage from '../public/Programmer-amico.svg';
import heroImage1 from '../public/landing/001-ideation.svg';
import testimonialImage from '../public/Testimonials-rafiki.svg';
import Button from '../components/ui/Button';
import WhatWeDoCard from '../components/ui/WhatWeDoCard';
import PartialUnderline from '../components/ui/PartialUnderline';
import {
  faDatabase,
  faDesktop,
  faHourglass,
  faMobile,
  faMobilePhone,
  faPen,
  faPhone,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEye,
  faGlobe,
  faHandshake,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import TestimonialCard from '../components/ui/TestimonialCard';
import TestimonialSection from '../components/ui/sections/TestimonialSection';
import FooterSection from '../components/ui/sections/FooterSection';
import OverviewCard from '../components/ui/OverviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faAndroid, faGithub, faInstagram, faLinkedin, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import WhatWeDoSection from '../components/ui/sections/WhatWeDoSection';
import { Quicksand } from '@next/font/google';

import kaleab from './../public/our-team/kaleab.JPG';
import OurTeamSection from '../components/ui/sections/OurTeam';
import HeroImageScrollSection from '../components/ui/sections/HeroImageScrollSection';

const quicksand = Quicksand({subsets : ['latin']});
export default function Home() {
  return (
    <BodyLayout page="home">
      <div className="max-w-maxContentWid grid mx-4 sm:mx-8 lg:mx-10 2xl:mx-auto  my-auto">
        <div className="m-auto max-w-maxContentWid ">
          {/* landing section start */}
          <div className="grid grid-flow-row md:grid-flow-col gap-14 m-auto max-w-maxHeroWid my-8 lg:my-28 ">
            <div className="grid m-auto max-w-[350px] mx-auto rounded-full inline-flex">
              <div className=" relative grid m-auto box-content">
                {/* changing shadow design start */}
                <div className="s1 rounded-full shadow-[-3px_-3px_10px_2px_textColor1] dark:shadow-[-3px_-3px_10px_2px_textColor1Dark] shadow-textColor1 dark:shadow-textColor1Dark    absolute w-full h-fill top-0  -inset-0.5"></div>
                <div className="s2 rounded-full shadow-[3px_-3px_10px_2px_textColor1] dark:shadow-[3px_-3px_10px_2px_textColor1Dark] shadow-accentColor dark:shadow-accentColorDark absolute w-full h-fill top-0 bg-red-5040 -inset-0.5"></div>
                {/* changing shadow design end */}

                <div className=" w-fit grid m-auto h-fit rounded-full border border-background2 dark:border-background2Dark border-8  dark:bg-gray-500 bg-gray-400">
               <HeroImageScrollSection/>

                </div>
              </div>
            </div>
            <div className="my-auto grid grid-flow-row gap-5">
              <div className="grid gap-1">
                <div className="text-textColor1 dark:text-textColor1Dark opacity-50 mb-5">
                  <div className="b1 absolute">Frontend Web</div>{' '}
                  <div className="b2 absolute">Backend Api</div>{' '}
                  <div className="b3 absolute">Mobile App</div>
                  <div className="b4 absolute">Ui / Ux design</div>
                  <div className="b5 absolute">Website</div>
                </div>
                <div
                  className={
                    `text-textColor1 dark:text-textColor1Dark text-5xl font-bold` +
                    ' ' +
                    quicksand.className
                  }
                >
                  Qmem Developers
                </div>
              </div>
              <div className="text-textColor2 dark:text-textColor2Dark opacity-70  text-md  ">
                We are a team of Dedicated, Hardworking and Proficient software
                engineers from Addis Ababa University with experience of
                successfully delivering projects and plans to work on
                challenging projects in the future.{' '}
              </div>
              <div className="mr-auto grid grid-flow-col gap-4 ">
                <Button placeholder={'Download CV'} />
                <Link className="" href="/contact">
                  <Button
                    placeholder={'Contact Us'}
                    hover="hover:bg-textColor3 dark:hover:bg-textColor3Dark hover:text-background1  "
                    ring="ring-textColor3 dark:ring-textColor3Dark"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* landing section end */}
          
          {/* what we do section start */}
          <WhatWeDoSection />
          {/* what we do section end */}
 {/* performance overview start */}
          <div className="m-auto grid grid-flow-row gap-8 text-textColor1 dark:text-textColor1Dark my-10">
            <div>
              <PartialUnderline text="Overview" />
              
            </div>
            <div className=" grid grid-flow-row sm:grid-flow-col gap-7">
              <OverviewCard
                icon={faProjectDiagram}
                number={34}
                unit="+"
                text="Projects Completed"
              />
              <OverviewCard
                icon={faHandshake}
                number={20}
                unit="+"
                text="Satisfied Clients"
              />
              <OverviewCard
                icon={faStar}
                number={100}
                unit="%"
                text="Job Success"
              />
              <OverviewCard
                icon={faHourglass}
                number={2}
                unit="+"
                text="Years of Experience"
              />
            </div>
          </div>
          {/* performance overview end */}

          {/* testimonials section start */}
          <TestimonialSection />
          {/* testimonials section end */}

         
          {/* Our Team start */}
          <OurTeamSection/>
          {/* Our Team end */}
          </div>
      </div>
    </BodyLayout>
  );
}
