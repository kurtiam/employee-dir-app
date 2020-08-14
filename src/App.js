import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </div>
  );
}

export default App;
