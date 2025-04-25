import css from './MoneyDesc.module.css'
import Description from './Description'

const MoneyDesc = ({ data, setToggle }) => {
  return (
    <div className={css.moneyDesc}>
      <h2>내역</h2>

      {data.length === 0 ? (
        <p className={css.emptyText}>내역이 없습니다.</p>
      ) : (
        <div className={css.descList}>
          {data.map(item => (
            <Description
              key={item.id}
              id={item.id}
              description={item.description}
              type={item.type}
              amount={item.amount}
              setToggle={setToggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MoneyDesc
