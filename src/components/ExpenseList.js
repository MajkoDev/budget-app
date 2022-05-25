import React from 'react'

function ExpenseList() {
  return (
    <div className="transactions transactions-expense">
        <h2>Transaction History</h2>
        <ul className="transaction-list">
            <span className="transaction-text">Rent</span>
            <span className="transaction-amount">2000</span>
            <button className="delete-btn">
                <i className="fas fa-trash"></i>
            </button>
        </ul>
    </div>
  )
}

export default ExpenseList