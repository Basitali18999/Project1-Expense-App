import './App.css';
import React from 'react'

// Components Import

import { Header } from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import { TransHistory } from './components/TransHistory';
import {AddTransaction} from './components/AddTransaction'

// import the Global Provider

import {GlobalProvider} from './components/context/GlobalState'




function App() {
  return (
    <GlobalProvider>
      <Header />
      
      <div className='container'>
      <Balance />
      </div>
      <AccountSummary />
      <TransHistory />
      <AddTransaction />

    </GlobalProvider>
  );
}

export default App;
