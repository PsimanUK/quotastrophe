import React from 'react';
import './App.css';
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
        <QuoteForm />
      </body>
    </div>
  );
}

export default App;
