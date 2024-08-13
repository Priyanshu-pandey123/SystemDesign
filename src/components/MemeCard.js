
import React from 'react'

const MemeCard = ({data}) => {
    console.log(data,"memCard")
  return (
    <div className='flex flex-col border-2 border-black w-[250px] h-[250px]'>
    <img src={data.url} alt="memelogo" className='w-[200px] h-[200px] object-cover m-2'/>
    <h1 className=' text-black text-center font-bold p-2'>
        {data.name}
    </h1>
</div>

  )
}

export default MemeCard