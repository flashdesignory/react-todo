import uniqid from 'uniqid';

const defaultData = [
  {
    id: uniqid(), action: 'clean garage', completed: false, selected: false,
  },
  {
    id: uniqid(), action: 'wash car', completed: false, selected: false,
  },
];

export default defaultData;
