const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELET_TRANSACT':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)

            }
        case 'ADD_TRANSACT':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }



        default:
            return state

    }

}

export default AppReducer;



