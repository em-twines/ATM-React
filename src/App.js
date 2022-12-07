import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar.jsx';
import SetCredentials from './Components/SetCredentials.jsx';
import ChangeUsernameOrPassword from './Components/ChangeUsernameOrPassword.jsx';
import ViewBalance from './Components/ViewBalance.jsx';
import DepositFunds from './Components/DepositFunds';
import WithdrawFunds from './Components/WithdrawFunds.jsx';
import Logout from './Components/Logout.jsx';
import RecentTransactions from './Components/RecentTransactions.jsx';


 

function App() {

  const [username, setUserName] = useState('');
  const [userpass, setUserPw] = useState('');
  const [transactions, setTransactions] = useState([{amount: 100, balance: 100}])
  const [balance, setBalance] = useState([{balance: 100}]);

  function addNewTransaction(transaction){
    let tempTransaction = [transaction, ...transactions]; 
    setTransactions(tempTransaction); 
 }

 function updateBalance(newBalance){
    let tempBalance = (newBalance)
    setBalance(tempBalance);
 }


 function handleUsername(newUsername){
    let tempName = newUsername; 
    setUserName(tempName); 
  }

  function handlePassword(newUserpass){
    let tempPw = newUserpass; 
    setUserPw(tempPw);
  }


return (
 <div className="App">
    <div id = 'setCredentials'><SetCredentials username = {username} password = {userpass}/></div>

    <div className = 'nav-bar'>
      <div><NavBar/></div>
        <div className = 'nav-container'>
          <div className = 'change'><ChangeUsernameOrPassword username = {handleUsername} userpass = {handlePassword}/></div>
          <div className = 'logout'><Logout/></div>
      </div>
    </div>
  
  <div className = 'container'>
    <div className = 'menu h2'>Menu</div>
    <div className = 'options'>
      <div><ViewBalance /></div>
      <div className = 'deposit'><DepositFunds addNewTransaction = {addNewTransaction} transactions = {transactions} /></div>
      <div className = 'withdraw'><WithdrawFunds addNewTransaction= {addNewTransaction} transactions = {transactions} /></div> 
    </div>
    <div className = 'transactions'><RecentTransactions transactions = {transactions}/></div>

    </div>

      {//form for each
      }
 </div>
  );
}

export default App;

  // const [withdraw, setNewWithdraw] = useState(0); 

  // const[changeFunds, setNewBalance] = useState[balance]

    // 
    // function handleBalance(newBalance){
    //   let tempBalance = balance; 
    //   setBalance(tempBalance);
    // }

    // function handleDeposit(newDeposit){
    //   let tempDeposit = deposit + balance;
    //   setNewBalance(tempDeposit);
    // }
    // function handleWithdraw(newWithdraw){
    //   let tempWithdraw = balance - withdraw;
    //   setNewWithdraw(tempWithdraw);
    // }

  