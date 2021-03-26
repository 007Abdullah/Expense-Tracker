import React, { useContext, useState } from 'react'
import { TransactionsContext } from './globalContext';


export default function Main() {
    let { transactions, addTransaction } = useContext(TransactionsContext)
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    function handleAddition(event) {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Sorry Please Correct value Warna goto hel");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
    }

    function getIncome() {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount
            }
        }
        return income;
    }
    function getExpense() {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount
            }
        }
        return expense;
    }
    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br />{getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>INCOME <br />{getIncome()}</h3>
                <h3>EXPENSE <br />{getExpense()}</h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, index) => {
                    return (
                        <li key={index}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}

            </ul>
            <h3>Add new transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description
                    <br />
                    <input type="text" required onChange={(env) => setDesc(env.target.value)} />
                </label>
                <br />
                <label>
                    Enter Amount
                    <br />
                    <input type="number" required onChange={(env) => setAmount(env.target.value)} />
                </label>
                <br />

                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}
