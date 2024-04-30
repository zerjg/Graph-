import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataComponent from './DataComponent';
 function App() {
  const data = [10, 20,5, 30, 50, 15, 44,77,88,120]
  
  return (
    <div className="App">
      <header>
      <DataComponent data={data}  />
      </header>
    </div>
  );
}

export default App;