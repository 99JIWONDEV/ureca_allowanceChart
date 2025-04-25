import React from 'react'
import css from './DeleteModal.module.css'

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <h2>정말 삭제하시겠습니까?</h2>
        <div>
          <button onClick={onDelete}>삭제</button>
          <button onClick={onClose}>취소</button>
        </div>
        <p>삭제된 내역은 복구할 수 없습니다.</p>
      </div>
    </div>
  )
}

export default DeleteModal
