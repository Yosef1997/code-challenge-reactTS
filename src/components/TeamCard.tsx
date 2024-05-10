interface TeamCardProps {
  e: {
    img: string
    name: string
    position: string
  }
}

const TeamCard: React.FC<TeamCardProps> = ({ e }) => {
  return (
    <div className='relative flex flex-col items-center h-44 md:h-72'>
      <img className='w-full h-full rounded-md' src={e.img} alt='team-img' />
      <div className='absolute bg-white -bottom-7 rounded-md w-11/12 py-1 text-center md:-bottom-10'>
        <h2 className='text-xs md:text-base font-bold'>{e.name}</h2>
        <h2 className='text-xs md:text-base '>{e.position}</h2>
      </div>
    </div>
  )
}

export default TeamCard
