import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add: {
      reducer(state, {payload}) {
        const isPresent = state.contacts.find(
          contact =>
            contact.name.toLowerCase() === payload.name.toLowerCase());
            if(isPresent) {
              alert(`${payload.name} is already in contacts`);
              return;
            } else {
              state.contacts.push(payload);
            }
        },
    },
    remove: (state, { payload }) => 
      (state.contacts = state.contacts.filter(({ id }) => id !== payload)),
    setFilter: (state, { payload }) => state.data = state.contacts.filter(({name}) => name === payload),  
  },
})

export const contactsReducer = contactsSlice.reducer;
export const { add, remove, filter } = contactsSlice.actions;
