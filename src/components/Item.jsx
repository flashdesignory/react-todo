// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleItem, removeItem, updateItem } from '../state/actions';
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

  dispatchSave = () => {
    const { value } = this.state;
    const { onUpdate } = this.props;
    const text = value;
    const { item } = this.props;
    const updatedItem = { ...item, action: text };
    onUpdate(updatedItem);
  }

  dispatchChange = () => {
    const { onChange } = this.props;
    const { item } = this.props;
    onChange(item.id);
  }

  dispatchDelete = () => {
    const { onRemove } = this.props;
    const { item } = this.props;
    onRemove(item.id);
  }

  render() {
    const { item } = this.props;
    const { value } = this.state;
    return (
      <li className={item.selected ? 'todo-list-item selected' : 'todo-list-item'}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={this.dispatchChange}
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
          onClick={this.dispatchSave}
          disabled={value === item.action}
        >
          save
        </button>
        <button name={item.id} type="button" onClick={this.dispatchDelete}>delete</button>
      </li>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  onUpdate: value => dispatch(updateItem(value)),
  onChange: value => dispatch(toggleItem(value)),
  onRemove: value => dispatch(removeItem(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
