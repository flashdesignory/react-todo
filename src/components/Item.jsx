// @flow
import React from 'react';
import './Item.scss';

type Props = {
  item: object,
  onChange: (e) => {},
  onClick: (e) => {},
}

const Item = (props: Props) => {
  const { item, onChange, onClick } = props;
  return (
    <li className={item.selected ? 'todo-list-item selected' : 'todo-list-item'}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={onChange}
        id={item.id}
      />
      <label htmlFor={item.id} />
      <span className="item-text">{item.action}</span>
      <button name={item.id} type="button" onClick={onClick}>delete</button>
    </li>
  );
};

export default Item;
