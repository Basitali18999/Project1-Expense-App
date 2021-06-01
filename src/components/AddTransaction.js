import React, {useState} from 'react'


export const AddTransaction = () => {
    
    const [description, setDescription]=useState()
    const [transactionAmount, settransactionAmount]=useState()
    
    
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
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
                    </label>
                    <input 
                    type='number' 
                    id='AmountofTransaction' 
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
