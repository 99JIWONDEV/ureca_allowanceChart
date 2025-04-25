import css from './TotalMoney.module.css'

const TotalMoney = ({ data }) => {
  const total = data.reduce((acc, curr) => {
    if (curr.type === 'income') return acc + curr.amount
    else if (curr.type === 'expense') return acc - curr.amount
    return acc
  }, 0)

  return (
    <div className={css.totalMoney}>
      <p>
        잔액 <span>₩</span>
        <span>{total.toLocaleString()}</span>
      </p>
    </div>
  )
}

export default TotalMoney
