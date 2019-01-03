// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../state/actions';
import './AddItem.scss';

type Props = {
  onAdd: () => {},
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
    const { value } = this.state;
    const { onAdd } = this.props;
    onAdd(value);
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

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  onAdd: value => dispatch(addItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
