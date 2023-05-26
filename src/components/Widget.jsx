import React from 'react'
import PropTypes from 'prop-types'

export const Widget = React.forwardRef(({ style, className, children, ...rest }, ref) => {
  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
    </div>
  )
})

Widget.displayName = 'Widget'

Widget.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
}
