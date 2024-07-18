import React from 'react'

export type FullWidthRowProps = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const FullWidthRow = ({ children, style, ...props }: FullWidthRowProps) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: ' -50vw',
    marginRight: ' -50vw',
  }

  return (
    <span style={{ ...baseStyle, ...(style ? style : {}) }} {...props}>
      {children}
    </span>
  )
}

export default FullWidthRow
