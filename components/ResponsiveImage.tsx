/* eslint-disable @next/next/no-img-element */

const imageDomain = 'https://d3e8cg7irjennz.cloudfront.net/media'
const sizes = {
  thumb: 100,
  small: 600,
  medium: 1080,
  large: 1920,
  xlarge: 2560,
}

export const photoURL = (src) => {
  if (src.startsWith('http') || src.startsWith('/')) {
    return src
  }

  return `${imageDomain}/${src.replace(/^\//, '')}`
}

export const getPhotoSizes = (src) => {
  if (src.startsWith('http') || src.startsWith('/')) {
    return null
  }

  const photoKey = src
    .replace(/^\//, '')
    .replace('_thumb.webp', '')
    .replace('_small.webp', '')
    .replace('_medium.webp', '')
    .replace('_large.webp', '')
    .replace('_xlarge.webp', '')

  return {
    thumb: `${imageDomain}/${photoKey}_thumb.webp`,
    small: `${imageDomain}/${photoKey}_small.webp`,
    medium: `${imageDomain}/${photoKey}_medium.webp`,
    large: `${imageDomain}/${photoKey}_large.webp`,
    xlarge: `${imageDomain}/${photoKey}_xlarge.webp`,
  }
}

const ResponsiveImage = ({ src, alt, showCaption = false }) => {
  const fullSource = photoURL(src)
  const sizes = getPhotoSizes(src)

  if (sizes) {
    const { small, medium, large, xlarge } = sizes

    return (
      <a href={fullSource}>
        <img
          src={fullSource}
          alt={alt}
          srcSet={`${small} 200w, ${medium} 600w, ${large} 1920w, ${xlarge} 2560w`}
          className="mx-auto rounded shadow-md"
          style={{
            // Don't be more than 90% VW wide
            maxWidth: '90vw',

            // Don't be more than 60% VH, but also don't be bigger than 700px tall (for really tall displays)
            maxHeight: 'min(50vh, 700px)',

            // Maintain image aspect ratio
            width: 'auto',
            height: 'auto',
          }}
        />
      </a>
    )
  }

  return (
    <a href={fullSource}>
      <img
        src={fullSource}
        alt={alt}
        className="mx-auto rounded shadow-md"
        style={{
          // Don't be more than 90% VW wide
          maxWidth: '90vw',

          // Don't be more than 60% VH, but also don't be bigger than 700px tall (for really tall displays)
          maxHeight: 'min(50vh, 700px)',

          // Maintain image aspect ratio
          width: 'auto',
          height: 'auto',
        }}
      />
    </a>
  )
}

export default ResponsiveImage
