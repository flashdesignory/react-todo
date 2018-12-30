// @flow
import React, { Component } from 'react';
import './AddItem.scss';

type Props = {
  handleAddItem: () => {},
}

type State = {
  value: string,
}

const defaultValue = 'add item..';

class AddItem extends Component<Props, State> {
  state = {
    value: defaultValue,
  }

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleOnFocus = (e) => {
    if (e.target.value === defaultValue) {
      this.setState({
        value: '',
      });
    }
  }

  handleOnSubmit = (e) => {
    const { handleAddItem } = this.props;
    const { value } = this.state;
    handleAddItem(value);
    this.setState({
      value: defaultValue,
    });
    e.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <div className="todo-form-container">
        <form className="todo-form" onSubmit={this.handleOnSubmit}>
          <input
            className="todo-form-input"
            type="text"
            value={value}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
          />
          <button type="submit" disabled={value === defaultValue || value === ''}>add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
