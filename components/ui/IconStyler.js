import React from 'react'
import { IconContext } from 'react-icons/lib'

export default function IconStyler({children,value}) {
  return (
    <IconContext.Provider value={value}>

        <div>{children}</div>
    </IconContext.Provider>
  )
}
