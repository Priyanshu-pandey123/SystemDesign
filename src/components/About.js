 import React from 'react'
import { LANG } from '../utils/constant'
 const About = ({lang}) => {
    console.log(lang)
    const language=LANG[lang]
    console.log(language);

   return (
     <div>
        <h1>{language?.name}</h1>
        <p>{language?.about_us}</p>
        <h1>{language?.address}</h1>
     
        
     </div>
   )
 }
 
 export default About