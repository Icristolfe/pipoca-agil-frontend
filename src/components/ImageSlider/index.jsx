import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import PropTypes from 'prop-types'

import { CarouselContainer, CarouselItem, CarouselImage } from './style'

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Set the active item based on the current index
    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex, images.length])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

  return (
    <CarouselContainer>
      <Carousel
        itemsToShow={3}
        breakPoints={breakPoints}
        isRTL={false}
        itemPosition={currentIndex}
        verticalMode={false}
        enableAutoPlay={false}
        showArrows={true}
        autoPlaySpeed={3000}
      >
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <CarouselImage
              src={image}
              alt={`Image ${index}`}
              isActive={index === currentIndex}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselContainer>
  )
}
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default ImageSlider
