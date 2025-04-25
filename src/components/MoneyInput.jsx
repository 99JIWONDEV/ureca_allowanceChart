import React from 'react'
import css from './MoneyInput.module.css'

const MoneyInput = () => {
  return (
    <div className={css.moneyInput}>
      <h2>새로운 거래 추가</h2>
      <div className={css.expenseTitle}>
        <p>거래 내역</p>
        <input type="text" placeholder="내역 입력" required />
      </div>
      <div className={css.expenseType}>
        <div className={css.typeSelect}>
          <input type="radio" name="moneyType" value="income" id="income" />
          <label htmlFor="income">수입</label>
        </div>
        <div className={css.typeSelect}>
          <input type="radio" name="moneyType" value="expense" id="expense" />
          <label htmlFor="expense">지출</label>
        </div>
      </div>
      <input
        className={css.moneyInputField}
        type="number"
        id="currency"
        name="currency"
        step="0.01"
        min="0"
        placeholder="금액 입력"
        required
      />
      <button>추가하기</button>
    </div>
  )
}

export default MoneyInput
