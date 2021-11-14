import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import types from './types';

const addNewContact = createAction(types.ADD, (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});
const handleDelete = createAction(types.DELETE);
const changeFilter = createAction(types.CHANGE_FILTER);

// const addNewContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const handleDelete = id => ({
//   type: types.DELETE,
//   payload: id,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addNewContact, handleDelete, changeFilter };
