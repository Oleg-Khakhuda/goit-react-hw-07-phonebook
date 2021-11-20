import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
// } from './action';

axios.defaults.baseURL = 'https://61912c1741928b001768ff87.mockapi.io';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error.message));
//   }
// };

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name: name,
      phone: number,
    };
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// const addContact = ({name, number}) => async dispatch => {
//   const contact = {
//     name: name,
//     phone: number,
//   };

//   dispatch(addContactRequest());

//   try {
//     const { data } = await axios.post('/contacts', contact);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

const deleteContact = createAsyncThunk(
  'deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// const deleteContact = contactId => async dispatch => {
//   dispatch(deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     dispatch(deleteContactSuccess(contactId));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };

const operations = { fetchContacts, addContact, deleteContact };

export default operations;
