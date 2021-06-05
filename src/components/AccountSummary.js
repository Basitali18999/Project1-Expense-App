import React, { useContext } from 'react'

import { GlobalContext } from '../components/context/GlobalState';


export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.transactionAmount);

    const income = amount
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);



    const Expanse = amount
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const sign = Expanse < 0 ? '-' : '-';


    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+${income}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className='money minus'>{sign}${Math.abs(Expanse)}.00</p>

            </div>

        </div>
    )
}
