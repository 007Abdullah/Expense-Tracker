import React, { createContext, useReducer } from "react";
import TransactionReducer from './transactionReducer';
const initialTransactions = [
    { id: 1, amount: 500, desc: "Cash" },
    { id: 2, amount: -40, desc: "Book" },
    { id: 3, amount: -200, desc: "Camera" },
    { id: 4, amount: 200, desc: "Utility Bill" }
]

export const TransactionsContext = createContext(initialTransactions)

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)
    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    function deletItem(transID) {
        dispatch({
            type: "Del_TRANSACTION",
            payload: transID,
        })
    }
    return (
        <TransactionsContext.Provider value={{
            transactions: state,
            addTransaction: addTransaction,
            deletItem: deletItem
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}