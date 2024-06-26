import { AiFillYoutube } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { CgTwitter } from "react-icons/cg"
import { FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='bg-footer-bg text-white bg-cover bg-no-repeat px-5 py-10 md:px-20 md:py-20'>
      <div className='flex flex-col gap-y-10  md:grid md:grid-cols-5 '>
        <div className='md:col-span-1'>
          <img
            className='h-24 w-auto'
            src='/assets/tech-hub.png'
            alt='tech-hub'
          />
          <p className='text-md my-2 md:text-lg'>Build WorldClass Brand</p>
          <div className='flex gap-x-5'>
            <FaFacebookF size={20} />
            <CgTwitter size={20} />
            <AiFillInstagram size={20} />
            <FaTiktok size={20} />
            <AiFillYoutube size={20} />
          </div>
        </div>
        <div className='md:col-span-1 pr-10'>
          <h2 className='text-2xl font-medium'>Information</h2>
          <p className='py-1.5'>
            Address: Hang Kesturi Street, Kabil, Nongsa, Batam, 29467{" "}
          </p>
          <p className='py-1.5'>Phone: +62822-1111-2222</p>
          <p className='py-1.5'>Mail: tech_hub@gmail.com</p>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-medium'>Explore More</h2>
          <Link className='py-1.5' to={"/about"}>
            About Us
          </Link>
          <Link className='py-1.5' to={"/products"}>
            Products
          </Link>
          <Link className='py-1.5' to={"/team"}>
            Our Team
          </Link>
        </div>
        <div className='flex flex-col gap-y-2 items-center bg-orange p-5 rounded-lg md:col-span-2'>
          <h2 className='text-2xl font-medium'>Newsletter</h2>
          <p>Subscribe us to get information about discount</p>
          <form
            className='flex flex-col gap-y-2 items-center'
            onSubmit={() => {
              window.open("https://www.pornhub.com/")
            }}
          >
            <input
              className='p-2 rounded-lg focus:outline-none text-black'
              type='text'
              placeholder='example@gmail.com'
            />
            <button
              className='bg-white text-black w-full rounded-lg p-2 font-medium'
              type='submit'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='flex flex-col gap-y-5 items-center border-t border-orange pt-5 mt-10 md:flex-row md:justify-between'>
        <p className='text-sm'>Copyright @2024 TechHub. All Rights Reserved</p>
        <div className='flex gap-x-3 md:gap-x-5 text-sm'>
          <Link to={"/"}>Privacy policy</Link>
          <Link to={"/"}>Cookie notice</Link>
          <Link to={"/"}>Terms of service</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
