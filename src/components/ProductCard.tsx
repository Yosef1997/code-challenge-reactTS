import React from "react"
import { BsArrowRight } from "react-icons/bs"

interface ProductCardProps {
  props: {
    img: string
    name: string
    description: string
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ props }) => {
  return (
    <div className='flex gap-x-3 items-start p-3 rounded-md bg-white md:p-5'>
      <img className='h-14 w-14 rounded-md' src={props.img} alt='product-img' />
      <div className='flex flex-col items-start justify-between gap-y-2 w-full text-sm md:text-base'>
        <h2 className='font-bold line-clamp-1 text-sm md:text-base'>
          {props.name}
        </h2>
        <p className='line-clamp-2'>{props.description}</p>
        <button className='flex items-center gap-x-2 font-medium'>
          <p className='text-xs md:text-base'>Learn More</p>
          <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
