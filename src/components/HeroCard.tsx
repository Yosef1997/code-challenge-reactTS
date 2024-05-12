import React from "react"

const HeroCard: React.FC<{ num: string; description: string }> = ({
  num,
  description,
}) => {
  return (
    <div className='bg-orange p-1 w-fit h-fit rounded-xl text-center text-white md:p-10 md:w-full md:h-full'>
      <p className='text-xs md:text-3xl font-bold text-black'>{num}</p>
      <p className='text-xs md:text-base font-medium'>{description}</p>
    </div>
  )
}

export default HeroCard
