import React from 'react'
import css from './Description.module.css'

const Description = () => {
  return (
    <div className={css.description}>
      <p>4월 용돈</p>
      <div>
        <span>+</span>
        <span>₩</span>
        <span>100,000</span>
      </div>
    </div>
  )
}

export default Description
