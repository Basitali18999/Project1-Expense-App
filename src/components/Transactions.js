import React, { useContext } from 'react'
import { GlobalContext } from '../components/context/GlobalState'



export const Transactions = ({ transactions }) => {

  const { deleteTransaction } = useContext(GlobalContext)


  const sign = transactions.transactionAmount < 0 ? '-' : '+'

  return (
    <li className={transactions.transactionAmount < 0 ? 'minus' : 'plus'} >
      {transactions.description}
      <span>{sign}${Math.abs(transactions.transactionAmount)}</span>
      <button onClick={() => deleteTransaction(transactions.id)} className='delete-btn'>X</button>
    </li>


  )
}
