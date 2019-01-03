// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../state/actions';
import './Search.scss';

type Props = {
  onSearch: () => {},
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
    const { onSearch } = this.props;
    this.setState({
      value: e.target.value,
    });
    onSearch(e.target.value);
  }

  handleOnFocus = (e) => {
    if (e.target.value === defaultValue) {
      this.setState({
        value: '',
      });
    }
  }

  handleOnSubmit = (e) => {
    const { onSearch } = this.props;
    this.setState({
      value: defaultValue,
    });
    onSearch('');
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
          <button type="submit" disabled={value === defaultValue || value === ''}>clear</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({ search: state.search });
// const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onSearch: value => dispatch(searchItems(value)),
});

export default connect(null, mapDispatchToProps)(Search);
