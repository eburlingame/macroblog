'use client'

import 'swiper/css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import useBreakpoint from 'use-breakpoint'
import { BREAKPOINTS } from './breakpoints'
import { photoURL } from './ResponsiveImage'

export type SwiperImage = {
  src: string
  caption?: string
}

export type SwiperSliderProps = {
  images: SwiperImage[]
  initialSlide?: number
}

const SwiperSlider = ({ images, initialSlide = 1 }: SwiperSliderProps) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'mobile')

  const slidePerView = breakpoint === 'mobile' ? 1.3 : breakpoint === 'tablet' ? 1.4 : 1.9

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={slidePerView}
      centeredSlides={true}
      initialSlide={initialSlide}
    >
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
