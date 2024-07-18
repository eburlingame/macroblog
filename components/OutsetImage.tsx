import FullWidthRow from './FullWidthRow'
import ResponsiveImage from './ResponsiveImage'

const OutsetImage = ({ src, alt }) => {
  console.log('here')

  return (
    <FullWidthRow>
      <ResponsiveImage src={src} alt={alt} />
    </FullWidthRow>
  )
}

export default OutsetImage
