import { AiOutlineCloseCircle } from "react-icons/ai"
import Carousel from "react-multi-carousel"
import TeamCard from "./TeamCard"
import responsive from "../utils/CarouselResponsive"
import useRandomUser, { user } from "../hooks/useRandomUser"
import { useState } from "react"

const Team = () => {
  const { users } = useRandomUser()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectUser, setSelectUser] = useState<user>()

  const toggleModal = (value?: user) => {
    setShowModal(!showModal)
    if (!showModal) setSelectUser(value)
  }

  return (
    <div className=' pt-5 pb-10 md:py-20 text-center'>
      <div className='px-5 md:px-20'>
        <h2 className='text-orange text-lg md:text-base font-semibold'>
          TEAM MEMBER
        </h2>
        <h1 className='font-bold text-xl mt-1  md:mb-10 md:text-3xl'>
          Meet our professional and expert team members
        </h1>
      </div>

      <div className=' hidden md:grid grid-cols-4 gap-x-10 md:px-20'>
        {users.map((e, i) => {
          return (
            <div key={i} onClick={() => toggleModal(e)}>
              <TeamCard
                e={{
                  img: e.picture.large,
                  name: `${e.name.first} ${e.name.last}`,
                  position: e.position,
                }}
              />
            </div>
          )
        })}
      </div>

      <Carousel
        className='h-60 md:hidden'
        responsive={responsive.responsive}
        arrows={false}
      >
        {users.map((e, i) => {
          return (
            <div key={i} className='ml-5' onClick={() => toggleModal(e)}>
              <TeamCard
                key={i}
                e={{
                  img: e.picture.large,
                  name: `${e.name.first} ${e.name.last}`,
                  position: e.position,
                }}
              />
            </div>
          )
        })}
      </Carousel>

      {showModal ? (
        <div className='fixed bg-grey bg-opacity-70 top-0 bottom-0 right-0 left-0 p-5 md:p-20'>
          <div className=' relative bg-white h-full p-5 md:p-20 rounded-xl'>
            <div className='flex items-center gap-x-5 md:gap-x-20'>
              <img
                className='h-24 md:h-full w-auto rounded-xl'
                src={selectUser?.picture.large}
                alt='team-img'
              />

              <div className='text-start'>
                <h2 className='text-lg md:text-4xl font-bold'>{`${selectUser?.name.first} ${selectUser?.name.last}`}</h2>
                <h2 className='text-sm md:text-xl font-semibold text-grey'>
                  {selectUser?.position}
                </h2>
              </div>
            </div>
            <div className='mt-5 md:mt-10'>
              <p className='text-xl md:text-3xl font-thin'>
                {selectUser?.description}
              </p>
            </div>
            <div className='mt-5 md:mt-10'>
              <p className='text-xl md:text-3xl font-thin'>
                Email: {selectUser?.email}
              </p>
            </div>
            <button
              onClick={() => toggleModal()}
              className='absolute top-1 right-1 md:top-20 md:right-20 w-fit text-start '
            >
              <AiOutlineCloseCircle size={40} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Team
