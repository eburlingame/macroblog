import FullWidthRow from './FullWidthRow'
import SwiperSlider, { SwiperImage } from './SwiperSlider'

export type ImageSliderProps = {
  images: SwiperImage[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <FullWidthRow>
      <SwiperSlider images={images} initialSlide={0} />
    </FullWidthRow>
  )
}

export default ImageSlider
