import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[35%] md:pt-[18%] px-4 md:px-10 text-white bg-gradient-to-r from-black w-screen aspect-video absolute'>
       <h1 className='text-2xl md:text-5xl font-bold'>{title} </h1>
       <p className='hidden md:inline-block py-6 w-1/3'>{overview}</p>
       <div className='pt-2 md:pt-0'>
            <button className=' bg-white text-black text-lg md:text-xl  rounded px-4 p-1 md:p-2 md:px-6  mr-2 hover:bg-opacity-80'> Play</button>
            <button className='bg-gray-700 text-white text-lg md:text-xl rounded p-1 md:p-2 px-4 md:px-6 bg-opacity-60 hover:bg-opacity-90'>More Info</button>
        </div> 
    </div>
  )
}

export default VideoTitle