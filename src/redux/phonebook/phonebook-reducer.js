import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';



const contacts = createReducer(
    JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      {
        [actions.add]: (state, action) => [...state, action.payload],
        [actions.remove]: (state, action) => state.filter(({ id }) => id !== action.payload),
      }
);

const filter = createReducer('', {
    [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers([ contacts, filter ]);