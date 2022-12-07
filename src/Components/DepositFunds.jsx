import React, { useState } from 'react';


const DepositFunds = (props) => {    

    const [changeFunds, setNewBalance] = useState(0); 


    function handleSubmit(event){
        event.preventDefault();
        let balance = props.transactions.map((el) => {
            return el.balance;
        })

        let newBalance = balance[0] + changeFunds;
        let newTransaction = {
            amount: changeFunds,
            balance: newBalance
        }      
        props.addNewTransaction(newTransaction);
        setNewBalance(0);
        console.log(`new balance is  ${newBalance}`);

        console.log(`new transaction is  ${newTransaction}`);
    }


  return (

    <div>
        <div className = 'deposit'>Deposit</div>
        <form onSubmit ={handleSubmit}>
            <label>How much would you like to deposit?</label>
            <input type = 'number' value = {changeFunds} onChange={(event) => setNewBalance(parseFloat(event.target.value))}></input>
            <button className = 'badge badge-pill btn btn-secondary create ' type = 'submit'>Deposit</button>
        </form>

    </div>
        
    );
}
 
export default DepositFunds;
