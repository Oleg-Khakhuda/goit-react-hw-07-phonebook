import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import types from './types';
import {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
} from '../contacts/action';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [types.DELETE]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

export const contactReducer = combineReducers({
  items,
  filter,
});
