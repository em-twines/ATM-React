import './App.css';
import React, { useState } from 'react';

function App() {

const [username, setUserName] = useState('');
const [userpw, setUsePw] = useState('');
const [balance, setBalance] = useState(100); 



  return (
    <div className="App">
      <div><NavBar/></div>
      <div><SetCredentials username = {username} password = {userpw}/></div>
      <div><ChangeUsernameOrPassword newUsername = {setUserName} newPassword = {setUsePw}/></div>
      <div><ViewBalance balance = {balance}/></div>
      <div><DepositFundes balance = {balance} depositBalance = {setBalance}/></div>
      <div><WithdrawFundes balance = {balance} withdrawBalance = {setBalance}/></div>
      <div><Logout/></div>

    </div>
  );
}

export default App;
