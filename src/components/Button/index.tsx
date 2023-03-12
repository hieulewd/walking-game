import React, { useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import { ButtonPosition } from '../../constants'

interface Props {
  position: 'left' | 'right'
}

const Button: React.FC<Props> = (props) => {
  const { position } = props
  const timer = useRef<ReturnType<typeof setInterval>>()

  const handleScroll = () => {
    let distance = window.scrollX
    if (position === ButtonPosition.Right) {
      distance += 150
    } else {
      distance -= 150
    }
    window.scrollTo({ left: distance, behavior: 'smooth' })
  }

  const onMouseDown = () => {
    timer.current = setInterval(() => {
      handleScroll()
    }, 50)
  }

  const onMouseUp = () => {
    clearInterval(timer.current)
  }

  return (
    <div
      className={classNames(styles.scrollButton, styles[position])}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
    >
      <img src={position === ButtonPosition.Right ? arrowRight : arrowLeft} alt='Scroll' width={50} height={50} />
    </div>
  )
}

export default Button
