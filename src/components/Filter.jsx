// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterItems } from '../state/actions';

type Props = {
  onFilter: () => {}
}

class Filter extends Component<Props> {
  filterAll = () => {
    const { onFilter } = this.props;
    onFilter('all');
  }

  filterActive = () => {
    const { onFilter } = this.props;
    onFilter('active');
  }

  filterCompleted = () => {
    const { onFilter } = this.props;
    onFilter('completed');
  }

  render() {
    return (
      <div className="todo-filter-container">
        <button type="button" onClick={this.filterAll}>all</button>
        <button type="button" onClick={this.filterCompleted}>completed</button>
        <button type="button" onClick={this.filterActive}>active</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ filter: state.filter });

const mapDispatchToProps = dispatch => ({
  onFilter: value => dispatch(filterItems(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
