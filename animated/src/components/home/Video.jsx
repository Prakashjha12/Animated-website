import React from 'react'
import Video1 from '../../assets/Video1.mp4'
const video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' src={Video1} autoPlay muted loop/>
    </div>
  )
}

export default video
