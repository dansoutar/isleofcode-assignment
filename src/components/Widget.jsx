import React from 'react'

export const Widget = React.forwardRef(({ style, className, children, ...rest }, ref) => {
  console.log(rest)

  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
      Widget
    </div>
  )
})

Widget.displayName = 'Widget'
