import React from 'react'

export const TransHistory = () => {
    return (
        <div>
        <h3>Transaction History</h3>
        <ul className='list' >
           
           <li className='plus' >
             Project 1 Income
             <span>$1,000</span>
             <button className='delete-btn'>X</button>
           </li>
           
           <li className='minus'>
             Project 2 Salaries
             <span>-$500</span>
             <button className='delete-btn'>X</button>
           </li>



        </ul>
            
        </div>
    )
}
