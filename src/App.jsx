// @flows
import React, { Component } from 'react';
import uniqid from 'uniqid';
import List from './components/List';
import AddItem from './components/AddItem';
import Search from './components/Search';
import Filter from './components/Filter';
import {
  getItem, addItem, removeItem, updateItem,
} from './api/api';
import './App.scss';

const defaultData = [
  {
    id: uniqid(), action: 'clean garage', completed: false, selected: false,
  },
  {
    id: uniqid(), action: 'wash car', completed: false, selected: false,
  },
];

const storageId = 'todo-app';

class App extends Component {
  state = {
    data: [],
    searchTerm: '',
    filter: '',
  }

  componentDidMount() {
    const savedData = getItem(storageId);
    if (!savedData) {
      addItem(storageId, defaultData);
      this.setState({
        data: defaultData,
      });
    } else {
      this.setState({
        data: savedData,
      });
    }
  }

  handleItemStatus = (id) => {
    const { data } = this.state;
    const updatedData = data.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, completed: !item.completed };
        updateItem(storageId, updatedItem);
        return updatedItem;
      }
      return item;
    });

    this.setState({
      data: updatedData,
    });
  }

  handleFilterItem = (str) => {
    const { data } = this.state;

    const updatedData = data.map((item) => {
      let selected;
      if (str === '') {
        selected = false;
      } else if (item.action.toLowerCase().includes(str.toLowerCase())) {
        selected = true;
      } else {
        selected = false;
      }

      return { ...item, selected };
    });

    this.setState({
      searchTerm: str,
      data: updatedData,
    });
  }

  handleRemoveItem = (id) => {
    const { data } = this.state;

    removeItem(storageId, id);
    const updatedData = data.filter(item => item.id !== id);
    this.setState({
      data: updatedData,
    });
  }

  handleAddItem = (value) => {
    const { data, searchTerm } = this.state;
    const item = {};
    item.id = uniqid();
    item.action = value;
    item.completed = false;

    if (searchTerm === '') {
      item.selected = false;
    } else if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.selected = true;
    } else {
      item.selected = false;
    }

    addItem(storageId, item);
    const updatedData = [item, ...data];
    this.setState({
      data: updatedData,
    });
  }

  filterAll = () => {
    this.setState({
      filter: 'all',
    });
  }

  filterCompleted = () => {
    this.setState({
      filter: 'completed',
    });
  }

  filterActive = () => {
    this.setState({
      filter: 'active',
    });
  }

  render() {
    const { data, searchTerm, filter } = this.state;
    return (
      <div className="app">
        <div className="app-content">
          <Search handleFilterItem={this.handleFilterItem} />
          <AddItem handleAddItem={this.handleAddItem} />
          <Filter
            filterAll={this.filterAll}
            filterCompleted={this.filterCompleted}
            filterActive={this.filterActive}
          />
          <List
            data={data}
            searchTerm={searchTerm}
            filterTerm={filter}
            handleItemStatus={this.handleItemStatus}
            handleRemoveItem={this.handleRemoveItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
