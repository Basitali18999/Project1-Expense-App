import './App.css';
import React from 'react'

// Components Import

import { Header } from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import { TransHistory } from './components/TransHistory';
import {AddTransaction} from './components/AddTransaction'




function App() {
  return (
    <div>
      <Header />
      
      <div className='container'>
      <Balance />
      </div>
      <AccountSummary />
      <TransHistory />
      <AddTransaction />

    </div>
  );
}

export default App;
