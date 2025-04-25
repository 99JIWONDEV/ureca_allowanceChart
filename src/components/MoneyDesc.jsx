import React from 'react'
import css from './MoneyDesc.module.css'
import Description from './Description'

const MoneyDesc = () => {
  return (
    <div className={css.moneyDesc}>
      <h2>내역</h2>
      <div className={css.descList}>
        <Description />
        <Description />
        <Description />
        <Description />
        <Description />
        <Description />
        <Description />
      </div>
    </div>
  )
}

export default MoneyDesc
