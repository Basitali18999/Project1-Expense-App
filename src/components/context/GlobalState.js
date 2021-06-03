import React, { createContext, useReducer } from 'react'
import  AppReducer  from './AppReducer'


//Create the initalState

const initialState = {

    transactions: []


}

//Create the Global Context


export const GlobalContext = createContext(initialState);


//Create a Provider for the GlobalContext


export const GlobalProvider = ({children}) => {


const [state, dispatch]=useReducer(AppReducer, initialState)
  
// Actions


function deleteTransaction(id) {

    dispatch({
        
            type: 'DELET_TRANSACT',
            payload: id

    });
}
function addTransaction(transaction) {

    dispatch({
        
            type: 'ADD_TRANSACT',
            payload: transaction

    });
}

     return (

        <GlobalContext.Provider   value={

            {

                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }

        } >

    {children}
        </GlobalContext.Provider>
     )  

}

    