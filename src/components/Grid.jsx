import { Responsive, WidthProvider } from 'react-grid-layout'

import { Widget } from './Widget'

const RepsonsiveGridLayout = WidthProvider(Responsive)

export const Grid = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 }
  ]

  return (
    <RepsonsiveGridLayout
      className='layout'
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
    >
      <Widget key='a' style={{ backgroundColor: 'lightsalmon' }} />
      <Widget key='b' style={{ backgroundColor: 'teal' }} />
      <Widget key='c' style={{ backgroundColor: 'dodgerblue' }} />
    </RepsonsiveGridLayout>
  )
}
