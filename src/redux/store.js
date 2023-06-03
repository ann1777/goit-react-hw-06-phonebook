import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer, filterSlice}from './phonebook/phonebook-reducer';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const store = configureStore({
    reducer: { contacts: contactsReducer, filter: filterSlice.reducer },
    devTools: process.env.NODE_ENV === 'development',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export default store;