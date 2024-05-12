import { useState } from "react"

const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      {/* <button
        onClick={toggleModal}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Show Alert
      </button> */}
      {/* {showModal && ( */}
      <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white p-8 rounded shadow-md'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold'>Alert</h2>
            <button
              onClick={onClose}
              className='text-gray-600 hover:text-gray-800'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </button>
          </div>
          <p>This is an alert message!</p>
        </div>
      </div>
      {/* )} */}
    </div>
  )
}

export default Popup
