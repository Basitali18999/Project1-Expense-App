import './App.css';
import React from 'react'

// Components Import

import { Header } from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'





function App() {
  return (
    <div>
      <Header />
      
      <div className='container'>
      <Balance />
      </div>
      <AccountSummary />

    </div>
  );
}

export default App;
