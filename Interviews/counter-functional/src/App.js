import './App.css';
import React from 'react';
import CounterState from './CounterState';
import CounterReduce from './CounterReduce';

export default function App() {
  return (
    <div className="App">
      <CounterState />
      <CounterReduce />
    </div>
  );
}
