
import React from 'react'

const Chat = ({data}) => {
  return (
    <div className='flex m-2'>
        <img src={data.src} alt='not found' className='h-8 w-8 m-2'/>
          <p>
            <span className='m-2 text-lg font-bold'>{data.name}</span>
            <span>{data.message}</span>
        </p>
    </div>
  )
}

export default Chat