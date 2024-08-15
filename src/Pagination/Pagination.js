

import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
  

  const LIMIT=10;

const Pagination = () => {

  const[product,setProduct]=useState([]);
  const[currentPage,setCurrentPage]=useState(0);
  const [show,setShow]=useState(true)

  const handleNext=()=>{
    if(currentPage===8){
      setShow(false);
      return
    }else{
    setCurrentPage((active)=>active+1)
    setShow(false);
    }
  }

  const handlePrev=()=>{
    if(currentPage==0){
      setShow(false);
    }
    setCurrentPage((active)=>active-1)
  }


  const getData=async()=>{
       const data=await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage*LIMIT}&select=title,price,thumbnail`);
    const json=await data.json()
    setProduct(json.products)


  }

  useEffect(()=>{getData()},[currentPage])




  return (
    <div className='flex flex-wrap justify-center'>
    {
     product.map((prod) => <ProductList key={prod.id} {...prod} />)

    }
    
    <div className='h-12 w-full m-2 px-3 py-3 items-center flex justify-center '   >
      {
       show &&  <span className='p-2 m-2 bg-gray-400 cursor-pointer' onClick={handlePrev}> Prev</span>
      }
      {
        [...Array(10).keys()].map((i) => <span  key={i} className='px-3  py-3 m-1 border-2 border-black bg-gray-500' onClick={()=>{setCurrentPage(i+1);setShow(true)}}>{i+1}</span>)
      }
      {
        show && <span className='p-2 m-2 bg-gray-300 cursor-pointer' onClick={handleNext}>Next</span>
      }
    </div>
     </div>
  )
}

export default Pagination

