import React from 'react'
import css from './TotalMoney.module.css'

const TotalMoney = () => {
  return (
    <div className={css.totalMoney}>
      <p>
        총 지출 <span>₩</span>
        <span>200,000</span>
      </p>
    </div>
  )
}

export default TotalMoney
