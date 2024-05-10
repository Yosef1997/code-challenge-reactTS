const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
}

const responsivePrice = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
}

export default { responsive, responsivePrice }
