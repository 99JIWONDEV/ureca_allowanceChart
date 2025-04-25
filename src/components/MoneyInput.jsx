import React, { useState } from 'react'
import css from './MoneyInput.module.css'

const MoneyInput = ({ setToggle }) => {
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [amount, setAmount] = useState('')
  const [isDesc, setIsDesc] = useState(false)
  const [isType, setIsType] = useState(false)
  const [isAmount, setIsAmount] = useState(false)

  const handleAddTransactions = () => {
    if (!description) {
      setIsDesc(true)
      return
    } else {
      setIsDesc(false)
    }
    if (!type) {
      setIsType(true)
      return
    } else {
      setIsType(false)
    }
    if (!amount) {
      setIsAmount(true)
      return
    } else {
      setIsAmount(false)
    }

    const existing = JSON.parse(localStorage.getItem('transactions')) || []
    const newId = existing.length > 0 ? Math.max(...existing.map(t => t.id)) + 1 : 1

    const transactions = {
      id: newId,
      description,
      amount: parseInt(amount, 10),
      type,
      date: new Date().toISOString().split('T')[0],
    }

    const updated = [...existing, transactions]
    localStorage.setItem('transactions', JSON.stringify(updated))

    setToggle(prev => !prev)

    setDescription('')
    setType('')
    setAmount('')
  }

  return (
    <div className={css.moneyInput}>
      <h2>새로운 거래 추가</h2>
      <div className={css.expenseTitle}>
        <p>거래 내역</p>
        <input
          type="text"
          placeholder="내역 입력"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        {isDesc && <p className={css.error}>내역을 입력하세요</p>}
      </div>
      <div className={css.expenseType}>
        <div className={css.typeSelect}>
          <input
            type="radio"
            name="moneyType"
            value="income"
            id="income"
            checked={type === 'income'}
            onChange={e => setType(e.target.value)}
          />
          <label htmlFor="income">수입</label>
        </div>
        <div className={css.typeSelect}>
          <input
            type="radio"
            name="moneyType"
            value="expense"
            id="expense"
            checked={type === 'expense'}
            onChange={e => setType(e.target.value)}
          />
          <label htmlFor="expense">지출</label>
        </div>
      </div>
      {isType && <p className={css.error}>소비 타입을 입력하세요</p>}
      <input
        className={css.moneyInputField}
        type="number"
        id="currency"
        name="currency"
        step="0.01"
        min="0"
        placeholder="금액 입력"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      {isAmount && <p className={css.error}>금액을 입력하세요</p>}
      <button onClick={handleAddTransactions}>추가하기</button>
    </div>
  )
}

export default MoneyInput
