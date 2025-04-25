import { useState } from 'react'
import css from './Description.module.css'
import DeleteModal from './DeleteModal'

const Description = ({ id, description, type, amount, setToggle }) => {
  const [showModal, setShowModal] = useState(false)
  const borderColor = type === 'income' ? 'var(--main-green)' : 'var(--main-red)'

  const handleDelete = () => {
    const data = JSON.parse(localStorage.getItem('transactions')) || []
    console.log(data)
    console.log('id', id)
    const filtered = data.filter(item => item.id !== id)
    console.log('filtered', filtered)
    localStorage.setItem('transactions', JSON.stringify(filtered))
    setShowModal(false)
    setToggle(prev => !prev)
  }

  return (
    <>
      <div className={css.description} style={{ borderRight: `4px solid ${borderColor}` }}>
        <p>{description}</p>
        <div>
          <span>{type === 'income' ? '+' : '-'}</span>
          <span> ₩</span>
          <span>{amount.toLocaleString()}</span>
          <i
            className="bi bi-trash3"
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          ></i>
        </div>
      </div>

      {showModal && <DeleteModal onClose={() => setShowModal(false)} onDelete={handleDelete} />}
    </>
  )
}

export default Description
