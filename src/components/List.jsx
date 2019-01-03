// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import './List.scss';

type Props = {
  data: object,
  filter: string,
  search: string,
}

class List extends Component<Props> { //eslint-disable-line
  getCurrentItems() {
    const { data, filter, search } = this.props;

    const currentData = data.filter((item) => {
      switch (filter) {
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
    }).map((item) => {
      if (search === '') {
        return { ...item, selected: false };
      }
      if (item.action.toLowerCase().includes(search.toLowerCase())) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });
    return currentData;
  }

  render() {
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          {this.getCurrentItems().map(item => (
            <Item
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(List);
