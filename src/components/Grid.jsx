import { useState, useEffect, useRef } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import PropTypes from 'prop-types'

import { Widget } from './Widget'

const RepsonsiveGridLayout = WidthProvider(Responsive)

const TILE_SIZE = 100

export const Grid = ({ layout, setLayout }) => {
  const [numOfCols, setNumOfCols] = useState(0)
  const gridRef = useRef()

  useEffect(() => {
    const handleResize = () => {
      const gridWidth = gridRef.current.elementRef.current.offsetWidth
      const numberOfColumns = Math.floor(gridWidth / TILE_SIZE)
      setNumOfCols(numberOfColumns)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <RepsonsiveGridLayout
      className='layout'
      compactType={null}
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: numOfCols ? numOfCols : 12 }}
      rowHeight={100}
      ref={gridRef}
      onLayoutChange={(layout) => {
        setLayout(layout)
      }}
    >
      <Widget className='widget' key='a' style={{ backgroundColor: 'lightsalmon' }} />
      <Widget className='widget' key='b' style={{ backgroundColor: 'teal' }} />
      <Widget className='widget' key='c' style={{ backgroundColor: 'dodgerblue' }} />
    </RepsonsiveGridLayout>
  )
}

Grid.propTypes = {
  layout: PropTypes.array,
  setLayout: PropTypes.func.isRequired
}
