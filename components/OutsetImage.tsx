import FullWidthRow from './FullWidthRow'
import ResponsiveImage from './ResponsiveImage'

const OutsetImage = ({ src, alt }) => {
  return (
    <FullWidthRow>
      <ResponsiveImage src={src} alt={alt} />

      <div
        className="mx-auto text-center text-sm text-gray-500 dark:text-gray-400"
        style={{ maxWidth: '60ch' }}
      >
        {alt}
      </div>
    </FullWidthRow>
  )
}

export default OutsetImage
