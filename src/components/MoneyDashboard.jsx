import css from './MoneyDashboard.module.css'

const MoneyDashboard = ({ data }) => {
  const totalIncome = data
    .filter(item => item.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0)

  const totalExpense = data
    .filter(item => item.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0)

  return (
    <div className={css.moneyDashboard}>
      <div className={css.income}>
        <p>수입</p>
        <p>
          <span>₩</span>
          {totalIncome.toLocaleString()}
        </p>
      </div>
      <div className={css.expense}>
        <p>지출</p>
        <p>
          <span>₩</span>
          {totalExpense.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default MoneyDashboard
