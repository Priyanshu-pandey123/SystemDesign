

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';


const data=[
    
    {
    tittle:"Ae Kash Ke Hum",
    detail:"'Ae Kash Ke Hum' from 'Kabhi Haan Kabhi Naafeatures Shah Rukh Khan taking Suchitra Krishnamoorthi on the best 'first date' ever. It is one of the most romantic songs of Bollywood sung by Kumar Sanu's soulful rendition making this a perfect song for your first date with that special someone! The film is a Bollywood romantic comedy directed Kundan Shah. The song is sung by Kumar Shanu and the music is composed and directed by Jatin-Lalit."
    },
    {
        tittle:"Main Koi Aisa Geet Gaoon",
        detail:`"Main Koi Aesa Geet Gaoon" is a popular Hindi song from the movie "Yes Boss" released in 1997. The music for the song was composed by Jatin-Lalit, and the lyrics were written by Javed Akhtar. The song was sung by Abhijeet Bhattacharya and Alka Yagnik.  Featuring Shahrukh Khan and Juhi Chawla. `
    },
    {
        tittle:"Ud ka Kale Kawa",
        detail:" Udja Kale Kawan Tere Munh Vich Khand Paavaan Leja Tu Sandesha Mera Main Sadke Jaavaan Baagon Mein Phir Jhule Pad Gaye"


    }
    

]

const Accordion = () => {
    const [rawData,setData]=useState(data)
    const [showIndex,setIndex]=useState()

  
   return (
     <div>
        {
             rawData.map((d,i)=><AccordionItem
                 tittle={d.tittle}          
                  detail={d.detail}
                 handleClick={()=>{setIndex((prevIndex)=>prevIndex===i?null:i)}}
                 showIndex={showIndex===i}
               
               />
              
            )
        }
     </div>
  )
}

export default Accordion