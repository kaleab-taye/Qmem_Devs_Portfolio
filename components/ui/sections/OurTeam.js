import React from 'react'
import PartialUnderline from '../PartialUnderline'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import kaleab from './../../../public/our-team/kaleab.JPG';

export default function OurTeamSection({image,github,linkedin,instagram}) {
  
    const team= [
        {
        name : 'Kaleab Taye',
        position:'Co-Founder',
        image : kaleab,
        github : 'https://github.com/kaleab-taye',
        instagram : 'https://instagram.com/_kaleab_taye',
        linkedin: 'https://www.linkedin.com/in/kaleab-taye/'
    },{
        name : 'Beka Dessalegn',
        position:'Co-Founder',

        image : kaleab,
        github : 'https://github.com/kaleab-taye',
        instagram : 'https://instagram.com/_kaleab_taye',
        linkedin: 'https://www.linkedin.com/in/kaleab-taye/'
    },{
        name : 'Estifanos Neway',
        position:'Co-Founder',

        image : kaleab,
        github : 'https://github.com/kaleab-taye',
        instagram : 'https://instagram.com/_kaleab_taye',
        linkedin: 'https://www.linkedin.com/in/kaleab-taye/'
    }
]

    return (
    <div className="m-auto grid grid-flow-row gap-8 text-textColor1 dark:text-textColor1Dark my-10">
            <div>
              <PartialUnderline text="Our Team" />
            </div>
            <div className='grid grid-flow-col gap-2 sm:gap-8 my-auto '>
                {
                    team.map((member)=>(<div key={member.name} className="my-auto gap-4 h-[100%] z-10 transition-all  text-center hover:-translate-y-2 ease-in-out duration-500 my-auto grid md:grid-flow-col border-2 rounded-lg bg-background3 dark:bg-background3Dark  py-[20px] px-[10px] border-background2 dark:border-background2Dark mx-auto">
                  <Image className='rounded-sm my-auto' width={200} src={member.image} alt="kaleab's picture"/>
                  <div className='gap-1 grid my-auto'>
                    <div className='font-bold text-xs sm:text-sm text-textColor1 dark:text-textColor1Dark'>{member.position}</div>
                    <div className='grid gap-2 '>
                        <div className='text-textColor3 dark:textColor3Dark'>{member.name}</div>
                        <div className="text-xs grid mx-auto gap-3 md:gap-6 grid-cols-auto grid-rows-auto grid-flow-col overflow- ">
                        <a
                            target="_blank"
                            href={member.github}
                            rel="noopener noreferrer"
                        >
                            <div className="  text-textColor2 dark:textColor2Dark hover:text-textColor1 dark:hover:text-textColor1Dark m-auto grid">
                            <FontAwesomeIcon
                                className="m-auto w-[26px] h-[26px]"
                                icon={faGithub}
                            />
                            </div>
                        </a>
                        <a
                            target="_blank"
                            href={member.linkedin}
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
                            href={member.instagram}
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
                    
                  </div>
              </div>)
              )
                }
            </div>

          </div>
  )
}
