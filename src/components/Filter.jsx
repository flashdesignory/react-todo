// @flow
import React from 'react';

type Props = {
  filterAll: () => {},
  filterCompleted: () => {},
  filterActive: () => {},
}

const Filter = (props: Props) => {
  const { filterAll, filterCompleted, filterActive } = props;
  return (
    <div className="todo-filter-container">
      <button type="button" onClick={filterAll}>all</button>
      <button type="button" onClick={filterCompleted}>completed</button>
      <button type="button" onClick={filterActive}>active</button>
    </div>
  );
};

export default Filter;
