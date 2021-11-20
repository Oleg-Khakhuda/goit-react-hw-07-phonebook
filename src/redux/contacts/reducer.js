import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  // fetchContactSuccess,
  // addContactSuccess,
  // deleteContactSuccess,
  // fetchContactRequest,
  // fetchContactError,
  changeFilter,
} from '../contacts/action';
import operations from './operations';

const items = createReducer([], {
  // [fetchContactSuccess]: (_, { payload }) => payload,
  [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  // [addContactSuccess]: (state, { payload }) => [...state, payload],
  [operations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  // [deleteContactSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

const error = createReducer(null, {
  [operations.fetchContacts.rejected]: (_, { payload }) => payload,
  [operations.fetchContacts.pending]: () => null,
});

export const contactReducer = combineReducers({
  items,
  filter,
  error,
});
