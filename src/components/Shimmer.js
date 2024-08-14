

import React from 'react'

const Shimmer = () => {

     const arr=[1,2,3,4,5,6,6,7,8,9]
  return (
    <div className='flex flex-row flex-wrap p-2 m-2'>
      
     {
        arr.map(()=> <div className='w-64 h-64 bg-gray-500 m-3 p-2 border-2 border-black'></div>)
     }
    
    </div>
  )
}

export default Shimmer