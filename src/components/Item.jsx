// @flow
import React, { Component } from 'react';
import './Item.scss';

type Props = {
  item: object,
  onChange: (e) => {},
  onRemove: (e) => {},
  onUpdate: (e) => {},
}

type State = {
  value: string,
}

class Item extends Component<Props, State> { //eslint-disable-line
  state = {
    value: '',
  }

  componentDidMount = () => {
    const { item } = this.props;
    this.setState({
      value: item.action,
    });
  }

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleOnBlur = (e) => {
    console.log(e.target.value); // eslint-disable-line
  }

  handleOnClick = () => {
    const { value } = this.state;
    const { onUpdate } = this.props;
    const text = value;
    const { item } = this.props;
    const updatedItem = { ...item, action: text };
    onUpdate(updatedItem);
  }

  render() {
    const {
      item, onChange, onRemove,
    } = this.props;
    const { value } = this.state;
    return (
      <li className={item.selected ? 'todo-list-item selected' : 'todo-list-item'}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={onChange}
          id={item.id}
        />
        <label htmlFor={item.id} />
        <input
          type="text"
          value={value}
          onChange={this.handleOnChange}
          onFocus={this.handleOnBlur}
        />
        <button
          name={item.id}
          type="button"
          onClick={this.handleOnClick}
          disabled={value === item.action}
        >
          save
        </button>
        <button name={item.id} type="button" onClick={onRemove}>delete</button>
      </li>
    );
  }
}

export default Item;
