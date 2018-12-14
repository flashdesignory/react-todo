// @flow
import React, { Component } from 'react';
import './Search.scss';

type Props = {
  handleFilterItem: () => {},
}

type State = {
  value: string,
}

const defaultValue = 'search..';

class Search extends Component<Props, State> {
  state = {
    value: defaultValue,
  }

  handleOnChange = (e) => {
    const { handleFilterItem } = this.props;
    this.setState({
      value: e.target.value,
    });
    handleFilterItem(e.target.value);
  }

  handleOnFocus = (e) => {
    if (e.target.value === defaultValue) {
      this.setState({
        value: '',
      });
    }
  }

  handleOnSubmit = (e) => {
    const { handleFilterItem } = this.props;
    this.setState({
      value: defaultValue,
    });
    handleFilterItem('');
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
          <button type="submit">clear</button>
        </form>
      </div>
    );
  }
}

export default Search;
