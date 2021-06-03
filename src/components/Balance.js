import React, { useContext } from 'react'
import { GlobalContext } from '../components/context/GlobalState'


export const Balance = () => {
    
    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(transactions => transactions.transactionAmount);
    const total = amount.reduce((acc, currentvalue) => (acc += currentvalue), 0)
    
    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}
