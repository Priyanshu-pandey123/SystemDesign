
import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';
import { set } from 'mongoose';

const Meme = () => {
      const [memeData,setMemedata]=useState([]);
      const [show,setShow]=useState(false);

      const handleScroll=()=>{
         if(window.innerHeight+window.scrollY>=document.body.scrollHeight){
           getMeme();
           console.log('hit');         
         }
        

      
      }

    const getMeme= async()=>{
        setShow(true)
        const data=await fetch('https://api.imgflip.com/get_memes')
        const json=await data.json(); 
        setShow(false)  
        setMemedata((memes) => [...memes, ...json.data.memes]);

    
       
        
        
    }
       useEffect(()=>{
        getMeme();
        window.addEventListener('scroll',handleScroll);
        return ()=>{
          window.removeEventListener('scroll',handleScroll);
        }
      },[])


    return (
         <div className='flex  flex-row flex-wrap'>
          {
          memeData.map((m,i)=><MemeCard  key={i} data={m}/>)
        
          }
          { show && <Shimmer/>}
          
         </div>
    
  )
}

export default Meme 