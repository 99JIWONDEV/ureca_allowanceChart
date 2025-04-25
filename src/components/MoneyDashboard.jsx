import React from 'react'
import css from './MoneyDashboard.module.css'

const MoneyDashboard = () => {
  return (
    <div className={css.moneyDashboard}>
      <div className={css.income}>
        <p>수입</p>
        <p>
          <span>₩</span>300,000
        </p>
      </div>
      <div className={css.expense}>
        <p>지출</p>
        <p>
          <span>₩</span>100,000
        </p>
      </div>
    </div>
  )
}

export default MoneyDashboard
