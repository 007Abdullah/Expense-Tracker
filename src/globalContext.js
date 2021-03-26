import React, { createContext, useReducer } from "react";
import TransactionReducer from './transactionReducer';
const initialTransactions = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" },
    { amount: 200, desc: "Utility Bill" }
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
    return (
        <TransactionsContext.Provider value={{
            transactions: state,
            addTransaction: addTransaction
        }}>
            {children}
        </TransactionsContext.Provider >
    )
}