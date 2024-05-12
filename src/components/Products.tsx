import products from "../utils/Products"
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import responsive from "../utils/CarouselResponsive"

const Products: React.FC<{ showNavigation?: boolean }> = ({
  showNavigation,
}) => {
  return (
    <div className='bg-product-bg bg-contain flex flex-col gap-y-5 items-center py-5 md:py-20'>
      <div className='flex flex-col items-center px-5 md:px-20'>
        <h2 className='text-orange text-lg font-semibold'>
          PROFESSIONAL SERVICE
        </h2>
        <h1 className='text-lg text-center md:text-3xl'>
          We do Professional Services Offers in <br /> the IT Sector
        </h1>
        <div className='hidden md:grid md:grid-cols-3 gap-10 mt-10'>
          {products.map((e, i) => {
            return (
              <ProductCard
                key={i}
                props={{
                  img: e.img,
                  name: e.name,
                  description: e.description,
                }}
              />
            )
          })}
        </div>
      </div>

      <Carousel
        className='md:hidden w-full'
        responsive={responsive.responsive}
        draggable={true}
      >
        {products.map((e, i) => {
          return (
            <div key={i} className='ml-2 md:ml-5'>
              <ProductCard
                props={{
                  img: e.img,
                  name: e.name,
                  description: e.description,
                }}
              />
            </div>
          )
        })}
      </Carousel>
      {showNavigation ? (
        <Link
          className='bg-orange p-3 md:p-5 rounded-md text-white font-medium md:mt-10'
          to={"/products"}
        >
          View All Services
        </Link>
      ) : null}
    </div>
  )
}

export default Products
