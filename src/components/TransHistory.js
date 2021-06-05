import React, { useContext } from 'react'

// Import Transactions

import { Transactions } from './Transactions'


// Import the GlobalContext

import { GlobalContext } from '../components/context/GlobalState'


export const TransHistory = () => {

  const { transactions } = useContext(GlobalContext)



  return (
    <div>
      <h3>Transaction History</h3>
      <ul className='list' >

        {transactions.map(transactions => (

          <Transactions key={transactions.id} transactions={transactions} />
        )
        )}


      </ul>

    </div>
  )
}
