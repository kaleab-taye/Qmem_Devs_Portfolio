import Head from 'next/head';
import Image from 'next/image';
import backendPng from '../public/icons/backend.png';
import BodyLayout from '../components/ui/BodyLayout';
import styles from '../styles/Home.module.css';
import heroImage from '../public/Programmer-amico.svg';
import Button from '../components/ui/Button';
import WhatWeDoCard from '../components/ui/WhatWeDoCard';
import PartialUnderline from '../components/ui/PartialUnderline';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faEye, faGlobe, faHandshake } from '@fortawesome/free-regular-svg-icons';
import TestimonialCard from '../components/ui/TestimonialCard';
import TestimonialSection from '../components/ui/sections/TestimonialSection';
import FooterSection from '../components/ui/sections/FooterSection';
import OverviewCard from '../components/ui/OverviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <BodyLayout page="home">
      <div className="max-w-maxContentWid   mx-10 2xl:mx-auto  my-auto">
        
        <div className="m-auto max-w-maxContentWid">
          {/* landing section start */}
          <div className="grid grid-flow-row md:grid-flow-col gap-14 m-auto max-w-maxHeroWid my-28">
            <div className="grid m-auto max-w-[350px]  rounded-full inline-flex">
              <div className="relative grid m-auto box-content">
                {/* changing shadow design start */}
                <div className="s1 rounded-full shadow-[-3px_-3px_10px_2px_textColor1] shadow-textColor1    absolute w-full h-fill top-0 bg-red-5040 -inset-0.5"></div>
                <div className="s2 rounded-full shadow-[3px_-3px_10px_2px_textColor1] shadow-accentColor absolute w-full h-fill top-0 bg-red-5040 -inset-0.5"></div>
                {/* changing shadow design end */}

                <div className="w-fit grid m-auto h-fit rounded-full border border-background2 border-8  bg-gray-500">
                  <Image
                    className="relative m-auto object-cover w-96 p-5 overflow-visible"
                    alt="Hero image"
                    src={heroImage}
                  />
                </div>
              </div>
            </div>
            <div className="my-auto grid grid-flow-row gap-5">
              <div className="grid gap-1">
                <div className="text-textColor3 opacity-60 mb-5">
                  <div className="b1 absolute">Frontend Web</div>{' '}
                  <div className="b2 absolute">Backend Api</div>{' '}
                  <div className="b3 absolute">Mobile App</div>
                  <div className="b4 absolute">Ui / Ux design</div>
                  <div className="b5 absolute">Website</div>
                </div>
                <div className="text-textColor1 text-5xl font-bold">
                  Qmem Developers
                </div>
              </div>
              <div className="text-textColor2 opacity-100 text-sm ">
                We are a group of dedicated, hardworking and proficient software
                engineers from Addis Ababa University with experience of
                successfully accomplishing tasks and plans to work on
                challenging projects in the future.{' '}
              </div>
              <div className="mr-auto grid grid-flow-col gap-4 ">
                <Button placeholder={'Download CV'} />
                <Button
                  placeholder={'Contact Us'}
                  hover=" hover:bg-textColor3 hover:text-background1 "
                  ring="ring-textColor1"
                />
              </div>
            </div>
          </div>
          {/* landing section end */}
          {/* what we do section start */}
          <div className="m-auto grid grid-flow-row gap-8 text-textColor1 my-10">
            <div className="">
              <PartialUnderline text="What We Do" />
            </div>
            <div className="grid grid-flow-row sm:grid-flow-col ">
              <div className="grid grid-flow-row">
                <WhatWeDoCard
                  title="Frontend Web App"
                  description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
                >
                  <Image
                    className="text-red-500"
                    src={backendPng}
                    alt="backend"
                  />
                </WhatWeDoCard>
                <WhatWeDoCard
                  title="Backend Api"
                  description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
                >
                  <Image
                    className="text-red-500"
                    src={backendPng}
                    alt="backend"
                  />
                </WhatWeDoCard>
              </div>
              <div className="grid grid-flow-row">
                <WhatWeDoCard
                  title="Website"
                  description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
                >
                  <Image
                    className="text-red-500"
                    src={backendPng}
                    alt="backend"
                  />
                </WhatWeDoCard>
                <WhatWeDoCard
                  title="SEO Optimazation"
                  description="Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex."
                >
                  <Image
                    className="text-red-500"
                    src={backendPng}
                    alt="backend"
                  />
                </WhatWeDoCard>
              </div>
            </div>
          </div>
          {/* what we do section end */}
          {/* testimonials section start */}
          <TestimonialSection />
          {/* testimonials section end */}
          {/* performance overview start */}
          <div className="m-auto grid grid-flow-row gap-8 text-textColor1 my-10">
            <div>
              <PartialUnderline text="Overview" />
            </div>
            <div className=" grid grid-flow-col gap-7">
              <OverviewCard icon={faHandshake} number='34' text ='Projects Completed'/>
              <OverviewCard icon={faHandshake} number='20' text ='Satisfied Clients'/>
              <OverviewCard icon={faHandshake} number='20' text ='Satisfied Clients'/>
              <OverviewCard icon={faHandshake} number='20' text ='Satisfied Clients'/>
            </div>
          </div>
          {/* performance overview end */}
        </div>
      </div>
    </BodyLayout>
  );
}
