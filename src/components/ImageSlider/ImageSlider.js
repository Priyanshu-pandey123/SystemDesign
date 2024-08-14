 

 import React, { useState } from 'react'
 
 const imageSliderData = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
    "https://picsum.photos/800/600?random=5",
    "https://picsum.photos/800/600?random=6",
    "https://picsum.photos/800/600?random=7",
    "https://picsum.photos/800/600?random=8",
    "https://picsum.photos/800/600?random=9",
    "https://picsum.photos/800/600?random=10"
  ];
  

  
  
  

  

 const ImageSlider = () => {
    const [active,setActive]=useState(1);
      
    const handleNext=()=>{
        setActive((active)=> (active+1) % imageSliderData.length)
    }

    const handlePrev=()=>{
         
        setActive((active)=>active<=0 ?imageSliderData.length-1:active-1)
    }

   return (
     <div className='flex m-2 p-2 justify-center items-center'>
       
        <button className=' m-2 bg-gray-700 p-2 h-10 w-20 rounded-full' onClick={handlePrev}>Prev</button>
        <img src={imageSliderData[active]}  alt='not found' className='w-[700px] h-80' />
        <button className=' m-2 bg-gray-700 p-2 h-10 w-20 rounded-full' onClick={handleNext}>Next</button>

     </div>
   )
 }
 
 export default ImageSlider