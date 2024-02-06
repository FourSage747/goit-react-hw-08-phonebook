import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from './contactsApi';

export const getContactsThunk = createAsyncThunk('contact/getContacts', () =>
  getContacts()
);

export const addContactsThunk = createAsyncThunk('contact/addContacts', (res) =>
  addContacts(res)
);

export const deleteContactsThunk = createAsyncThunk('contact/deleteContacts', (id) =>
  deleteContacts(id)
);
