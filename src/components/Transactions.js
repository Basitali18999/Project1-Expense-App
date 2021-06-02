import React from 'react'

export const Transactions = ({ transactions }) => {
    return (
        <li className='plus' >
        {transactions.description}
        <span>{transactions.transactionAmount}</span>
        <button className='delete-btn'>X</button>
      </li>
            
        
    )
}
