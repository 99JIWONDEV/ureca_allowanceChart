import React, { useState } from 'react'
import css from './Description.module.css'

const Description = ({ description, type, amount }) => {
  const [isActive, setIsActive] = useState(false)
  const borderColor = type === 'income' ? 'var(--main-green)' : 'var(--main-red)'
  return (
    <div
      className={css.description}
      style={{ borderRight: `4px solid ${borderColor}` }}
      onClick={() => setIsActive(prev => !prev)}
    >
      {/* X 버튼 */}
      {isActive && <button className={css.deleteBtn}>X</button>}
      <p>{description}</p>
      <div>
        <span>{type === 'income' ? '+' : '-'}</span>
        <span> ₩</span>
        <span>{amount.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default Description
