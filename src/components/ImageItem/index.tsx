import React, { useState } from 'react'
import ImageMapper from 'react-img-mapper'
import { Map, CustomArea } from 'react-img-mapper/dist/types'
import useWindowSize from '../../hooks/useWindowSize'
import Button from '../Button'
import { scenes, ButtonPosition } from '../../constants'

const ImageItem = () => {
  const [scene, setScene] = useState<any>(scenes[0])
  const [map, setMap] = useState<Map>()

  const { width: parentWidth } = useWindowSize()

  const handleClickPath = (area: CustomArea) => {
    console.log('area', area)
    setScene(scenes.find((d) => d.name === area.id))
  }

  const setImageMap = () => {
    setMap({
      name: scene.name,
      areas: scene.areas
    })
  }

  return (
    <div style={{ position: 'relative' }}>
      <Button position={ButtonPosition.Left} />
      <ImageMapper
        src={scene.imgSrc}
        map={map}
        fillColor='rgba(0, 0, 0, 0.3)'
        responsive
        parentWidth={parentWidth * 3}
        onClick={handleClickPath}
        onLoad={setImageMap}
      />
      <Button position={ButtonPosition.Right} />
    </div>
  )
}

export default ImageItem
