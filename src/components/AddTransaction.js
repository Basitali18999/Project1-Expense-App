import React, { useState, useContext } from 'react'
import { GlobalContext } from './context/GlobalState'


export const AddTransaction = () => {

    const [description, setDescription] = useState()
    const [transactionAmount, settransactionAmount] = useState()

    const { addTransactions } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();


        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount,
        
            
        }
        addTransactions(newTransaction);
    }   



    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit} >
                <div className='form-control' >
                    <label htmlFor='Description' >
                        Description
             </label>
                    <input
                        type='text'
                        id='Description'
                        placeholder='Detail of Transaction'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />

                </div>
                <div className='form-control' >
                    <label htmlFor='AmountofTransaction' >
                        Amount of Transaction
                        <br/>
                        <br/>
                    (for negative - expanse) 
                    </label>
                    <input
                        type='number'
                        id='transactionAmount'
                        placeholder='Enter Transaction Amount'
                        value={transactionAmount}
                        onChange={(e) => settransactionAmount(e.target.value)}
                    />


                </div>
                <button className='btn' >Add Transaction</button>


            </form>
        </div>
    )
}
