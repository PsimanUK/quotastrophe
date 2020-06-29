import React from 'react';
import './App.css';
// import { Router } from '@reach-router';
import QuoteForm from './components/quote_input_screen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Quotastophe
        </h1>
      </header>
      <body>
        {/* <Router> */}
        <QuoteForm path="/" />
        {/* </Router> */}
      </body>
    </div>
  );
}

export default App;
