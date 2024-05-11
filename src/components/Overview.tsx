import { GiHabitatDome } from "react-icons/gi"
import { BiHistory } from "react-icons/bi"
import HeroCard from "./HeroCard"

const Overview = () => {
  return (
    <div className='bg-overview-bg bg-center bg-cover text-white p-5 md:p-20'>
      <h1 className=' text-center font-bold md:text-4xl'>
        History and Culture
      </h1>

      <div className='grid grid-cols-2 gap-x-3 mt-10 md:mt-20 md:gap-x-20'>
        <div>
          <span className='flex items-center gap-x-2 mb-5'>
            <BiHistory size={25} />
            <h2 className='font-medium md:text-2xl'>History</h2>
          </span>

          <p className='text-xs font-medium bg-black bg-opacity-30 rounded-lg line-clamp-6 md:line-clamp-none md:p-5 md:text-base'>
            Established in 2010, TechHub swiftly rose as a frontrunner in tech
            solutions, initially focusing on web development and later expanding
            to encompass data center management, cloud computing, IT
            infrastructure, software renewal, and machine learning. With a
            commitment to innovation, TechHub evolved to meet the dynamic
            demands of the digital era. Today, it stands as a global leader,
            empowering businesses of all sizes to thrive through tailored
            technology solutions and exceptional service.
          </p>

          <div className='grid grid-cols-2 mt-5 md:mt-10 gap-x-1 md:gap-x-10'>
            <HeroCard num='25+' description='Years of experience' />
            <HeroCard num='80+' description='Projects completed' />
          </div>
        </div>
        <div>
          <span className='flex items-center gap-x-2 mb-5'>
            <GiHabitatDome size={25} />
            <h2 className='font-medium md:text-2xl'>Culture</h2>
          </span>

          <p className='text-xs font-medium bg-black bg-opacity-30 rounded-lg line-clamp-6 md:line-clamp-none md:p-5 md:text-base'>
            At TechHub, innovation thrives alongside collaboration as we
            cultivate a culture that values creativity, continuous learning, and
            customer satisfaction. We prioritize diversity and inclusion,
            recognizing the importance of varied perspectives in driving
            innovation. Our commitment to work-life balance ensures that
            employees thrive both personally and professionally, while our
            dedication to community engagement reinforces our belief in making a
            positive impact beyond the workplace.
          </p>

          <div className='grid grid-cols-2 mt-5 md:mt-10 gap-x-1 md:gap-x-10'>
            <HeroCard num='35' description='Amazing employee' />
            <HeroCard num='99' description='Hours of maintenance' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
