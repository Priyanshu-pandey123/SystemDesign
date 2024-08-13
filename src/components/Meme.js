
import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Meme = () => {
      const [memeData,setMemedata]=useState(null);

    const getMeme= async()=>{
         
        const data=await fetch('https://api.imgflip.com/get_memes')
        const json=await data.json();
        console.log(json.data.memes);
        setMemedata(json.data.memes);
    }
       useEffect(()=>{getMeme();},[])


    return (
         <div className='flex  flex-row flex-wrap'>
          {
           !memeData ? (<Shimmer/>) :  (memeData.map((m)=><MemeCard  key={m.id} data={m}/>))
        
          }
         </div>
    
  )
}

export default Meme 