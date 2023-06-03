import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    add(state, { payload: {name, number}}) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      state.data.push(contact);
    },
    remove(state, action) {
      state.data = state.data.filter(({ id }) => id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data'],
}

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
)

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducer: {changeFilter: (_, action) => action.payload},
});

export const { add, remove } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;