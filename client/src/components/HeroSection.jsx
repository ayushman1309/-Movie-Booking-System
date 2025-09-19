import React from 'react'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col items-start justify-center gap-6 px-6 md:px-16 lg:px-36 
      bg-[url('/backgroundImage.png')] bg-cover bg-center h-screen text-white"
    >
      {/* Heading */}
      <h1 className="text-5xl md:text-[70px] md:leading-[1.2] font-semibold max-w-2xl">
        Demon <br /> Slayer
      </h1>

      {/* Tags */}
      <div className="flex items-center gap-6 text-xl text-black">
        <span>Action | Thriller | Anime</span>
        <div className="flex items-center gap-1 text-black">
          <CalendarIcon className="w-4 h-4" /> 2025
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4 h-4" /> 2h 35m
        </div>
      </div>

      {/* Description */}
      <p className="max-w-lg text-gray-200 text-xl ">
        Demon Slayer: Infinity Castle is a Japanese anime film from Ufotable that brings together
        the Demon Slayer Corps for their most dangerous mission yet. Blending breathtaking action,
        stunning animation, the movie takes viewers on an intense journey through the mysterious
        Infinity Castle as Tanjiro and his allies face the strongest demons in a fight to protect
        humanity.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate('/movies')}
        className="flex items-center gap-2 px-6 py-3 text-sm bg-primary hover:bg-primary-dull 
        transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default HeroSection
