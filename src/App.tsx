import React from 'react'
import './App.scss'
import path1 from './assets/images/path1.jpg'

const App = () => {
  const handleClick = () => {
    console.log(123)
    alert('test')
  }
  return (
    <div className='App'>
      <img src={path1} useMap='#image-map' />

      <map name='image-map'>
        <area
          target=''
          alt=''
          title=''
          href='#'
          coords='576,325,487,38,438,43,380,329'
          shape='poly'
          onClick={handleClick}
        />
      </map>
    </div>
  )
}

export default App
