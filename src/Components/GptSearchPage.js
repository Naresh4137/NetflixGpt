import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="fixed z-[-9] ">
        <img
          className='h-screen object-cover md:w-screen'
          src={BG_IMG}
          alt="Logo"
        />
      </div>
    <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestions/>
        
    </div>
    </>
  )
}

export default GptSearch