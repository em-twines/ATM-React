import React, { useState } from 'react';

export default function WithdrawFunds(props) {




    const [changeWithdraw, setNewWithdrawBalance] = useState(0); 


    function handleSubmit(event){
        event.preventDefault();
        let balance = props.transactions.map((el) => {
            return el.balance;
        })

        let newBalance = balance[0] - changeWithdraw;
        let newTransaction = {
            amount: -changeWithdraw,
            balance: newBalance 
        }    
        props.addNewTransaction(newTransaction);

        setNewWithdrawBalance(0);

        console.log(`new balance is  ${newBalance}`);

        console.log(`new transaction is  ${newTransaction}`);
    }


  return (

<div>
    <div className = 'deposit'>Withdraw</div>
    <form onSubmit ={handleSubmit}>
        <label>How much would you like to withdraw?</label>
        <input type = 'number' value = {changeWithdraw} onChange={(event) => setNewWithdrawBalance(parseFloat(event.target.value))}></input>
        <button className = 'badge badge-pill btn btn-secondary create ' type = 'submit'>Withdraw</button>
    </form>

</div>
    
    );





  
}
