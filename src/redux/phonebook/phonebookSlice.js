import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: ""
  },
  reducers: {
    add: (state, {payload}) => (state = state.contacts.push(payload)),
    remove: (state, { payload }) => 
      (state.data = state.contacts.filter(({ id }) => id !== payload)),
    filter: (state, { payload }) =>
      (state.data = state.contacts.filter(({ name }) => name === payload))  
  },
})

export const contactsReducer = contactsSlice.reducer;
export const { add, remove, filter } = contactsSlice.actions;
