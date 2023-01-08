import React from 'react'

export default function WhatWeDoCard2({title,icon,description,index,children}) {
  return (
    <div className="grid group relative">
      <div className="   grid grid-cols-3 gap-2 my-auto ">
        <div className=" text-accentColor dark:text-accentColorDark grid m-auto grid min-w-[120px]">
          {children}
        </div>
        <div className="grid m-auto col-span-2">
          <div className="text-lg font-bold ">{title}</div>
          <div className="text-sm text-textColor1 dark:text-textColor1Dark opacity-60">
            {description}
          </div>
        </div>
      </div>
     {/*  <div className="absolute hidden shadow-xl group-hover:block bottom-0 right-0">
        <div className="grid h-[100%] gap-1 grid-flow-col">
          <div className="my-auto opacity-90 text-sm">Read more</div>{' '}
          <FontAwesomeIcon
            className="font-bold h-4 w-4 my-auto"
            icon={faArrowRight}
          />
        </div>
      </div> */}
    </div>
  )
}
