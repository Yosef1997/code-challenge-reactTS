import Carousel from "react-multi-carousel"
import teams from "../utils/Team"
import TeamCard from "./TeamCard"
import responsive from "../utils/CarouselResponsive"

const Team = () => {
  return (
    <div className='pt-5 pb-10 md:py-20 text-center'>
      <div className='px-5 md:px-20'>
        <h2 className='text-orange text-lg md:text-base font-semibold'>
          TEAM MEMBER
        </h2>
        <h1 className='font-bold text-xl mt-1  md:mb-10 md:text-3xl'>
          Meet our professional and expert team members
        </h1>
      </div>

      <div className=' hidden md:grid grid-cols-4 gap-x-10 md:px-20'>
        {teams.map((e, i) => {
          return (
            <TeamCard
              key={i}
              e={{
                img: e.img,
                name: e.name,
                position: e.position,
              }}
            />
          )
        })}
      </div>

      <Carousel className='h-60 md:hidden' responsive={responsive.responsive}>
        {teams.map((e, i) => {
          return (
            <div key={i} className='ml-5'>
              <TeamCard
                e={{
                  img: e.img,
                  name: e.name,
                  position: e.position,
                }}
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Team
