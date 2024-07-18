'use client'

import 'swiper/css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export type SwiperSliderProps = {
  images: string[]
}

const SwiperSlider = ({ images }: SwiperSliderProps) => {
  return (
    <Swiper spaceBetween={30} slidesPerView={1.7} centeredSlides={true} initialSlide={1}>
      {images.map((src) => {
        return (
          <SwiperSlide key={src}>
            <img src={src} className="rounded shadow-md" />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperSlider
