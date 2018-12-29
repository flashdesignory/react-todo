// @flow
import React, { Component } from 'react';
import Item from './Item';
import './List.scss';

type Props = {
  data: object,
  filterTerm: string,
  handleItemStatus: (e) => {},
  handleRemoveItem: (e) => {},
  handleUpdateItem: (e) => {},
}

class List extends Component<Props> { //eslint-disable-line
  getCurrentItems() {
    const { data, filterTerm } = this.props;

    const currentData = data.filter((item) => {
      switch (filterTerm) {
        case '':
        case 'all':
          return item;
        case 'active':
          return !item.completed;
        case 'completed':
          return item.completed;
        default:
          return item;
      }
    });
    return currentData;
  }

  handleOnChange = (e) => {
    const { handleItemStatus } = this.props;
    handleItemStatus(e.target.id);
  }

  handleOnRemove = (e) => {
    const { handleRemoveItem } = this.props;
    handleRemoveItem(e.target.name);
  }

  handleOnUpdate = (item) => {
    const { handleUpdateItem } = this.props;
    handleUpdateItem(item);
  }

  render() {
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          {this.getCurrentItems().map(item => (
            <Item
              key={item.id}
              onChange={this.handleOnChange}
              onRemove={this.handleOnRemove}
              onUpdate={this.handleOnUpdate}
              item={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
