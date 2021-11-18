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

const action = { addNewContact, handleDelete, changeFilter };

export default action;
