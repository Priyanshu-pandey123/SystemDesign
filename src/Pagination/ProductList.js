

import React from 'react'

const ProductList = ({id,title,price,thumbnail}) => {
  console.log(id)
  return (
    <div className='border-2 border-black m-2 p-2 text-wrap items-center'>

        <img src={thumbnail}  alt='not found'   className='h-52 w-60 bg-cover'/>
        <h1 className='text-lg text-cyan-900'>${price}</h1>
        <h1 className='text-lg text-blue-500 text-wrap w-52'>{title}</h1>
        <h1>{id}</h1>

    </div>
  )
}

export default ProductList