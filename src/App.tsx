import React from 'react';
import './App.css';
import DataComponent from './dataComponent';

function App() {
  

  return (
    <div className="App">
      <header>
        <span>Синий столбец - это текущее значение, голубой столбец -предыдущее значение</span>
        <DataComponent  />
      </header>
    </div>
  );
}

export default App;