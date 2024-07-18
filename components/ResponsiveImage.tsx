/* eslint-disable @next/next/no-img-element */

const photoURL = (fname, size) =>
  `https://d3e8cg7irjennz.cloudfront.net/media/${fname}_${size}.webp`

const getPhotosSizes = (src) => {
  const urlPattern = /https:\/\/d3e8cg7irjennz.cloudfront.net\/media\/(.+?)_(.+?)\.webp/

  const match = src.match(urlPattern)

  if (match) {
    const [_, fname] = match

    return {
      small: photoURL(fname, 'small'),
      medium: photoURL(fname, 'medium'),
      large: photoURL(fname, 'large'),
    }
  }

  return null
}

const ResponsiveImage = ({ src, alt }) => {
  const sizes = getPhotosSizes(src)

  // if (sizes) {
  //   const { small, medium, large } = sizes

  //   return (
  //     <a href={src}>
  //       <img
  //         src={src}
  //         srcSet={`${small} 200w, ${medium} 600w, ${large} 1920w`}
  //         alt={alt}
  //         className="mx-auto rounded shadow-md"
  //         style={{
  //           // Don't be more than 90% VW wide
  //           maxWidth: '90vw',

  //           // Don't be more than 60% VH, but also don't be bigger than 700px tall (for really tall displays)
  //           maxHeight: 'min(60vh, 700px)',

  //           // Maintain image aspect ratio
  //           width: 'auto',
  //           height: 'auto',
  //         }}
  //       />
  //     </a>
  //   )
  // }

  return (
    <a href={src}>
      <img
        src={src}
        alt={alt}
        className="mx-auto rounded shadow-md"
        style={{
          // Don't be more than 90% VW wide
          maxWidth: '90vw',

          // Don't be more than 60% VH, but also don't be bigger than 700px tall (for really tall displays)
          maxHeight: 'min(60vh, 700px)',

          // Maintain image aspect ratio
          width: 'auto',
          height: 'auto',
        }}
      />
    </a>
  )
}

export default ResponsiveImage
