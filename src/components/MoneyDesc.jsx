import css from './MoneyDesc.module.css'
import Description from './Description'

const MoneyDesc = ({ data }) => {
  return (
    <div className={css.moneyDesc}>
      <h2>내역</h2>
      <div className={css.descList}>
        {data.map(item => (
          <Description
            key={item.id}
            description={item.description}
            type={item.type}
            amount={item.amount}
          />
        ))}
      </div>
    </div>
  )
}

export default MoneyDesc
