'use client'

import 'swiper/css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { photoURL } from './ResponsiveImage'

export type SwiperImage = {
  src: string
  caption?: string
}

export type SwiperSliderProps = {
  images: SwiperImage[]
}

const SwiperSlider = ({ images }: SwiperSliderProps) => {
  return (
    <Swiper spaceBetween={30} slidesPerView={1.7} centeredSlides={true} initialSlide={1}>
      {images.map((img) => {
        return (
          <SwiperSlide key={img.src}>
            <img src={photoURL(img.src)} className="rounded shadow-md" />
            {img.caption && (
              <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">{img.caption}</p>
            )}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperSlider
