

import React, { useState } from 'react'

const AccordionItem = ({tittle,detail,handleClick,showIndex}) => {
  return (
    <div className='flex  flex-col text-white ml-36'>
        <div className='h-10 w-1/2 bg-gray-700 p-2 m-2 border-2 border-black flex justify-between'>
        <span>{tittle}</span>
        <span className='cursor-pointer' onClick={handleClick}>⬇️</span>
        
        </div>
        {
         showIndex && <div className='h-72 w-1/2 break-words bg-gray-600 p-2 m-1 border-2 border-black'>{detail}</div>
        }
     </div>
  )
}

export default AccordionItem