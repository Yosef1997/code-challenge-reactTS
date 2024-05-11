const Milestone = () => {
  return (
    <div className='pt-5 md:pt-20'>
      <h1 className='text-orange text-3xl font-bold text-center'>Milestone</h1>
      <img
        className=' hidden md:block w-full h-auto'
        src='/assets/milestone.png'
        alt='milestone'
      />
      <img
        className=' block md:hidden w-full h-auto'
        src='/assets/milestone-mobile.png'
        alt='milestone'
      />
    </div>
  )
}

export default Milestone
