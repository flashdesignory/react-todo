// @flows
import React from 'react';
import List from './components/List';
import AddItem from './components/AddItem';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="app-content">
      <Search />
      <AddItem />
      <Filter />
      <List />
    </div>
  </div>
);

export default App;
