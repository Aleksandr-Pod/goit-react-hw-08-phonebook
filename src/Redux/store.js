import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { contactsAPI } from 'API/contactsAPI';
import authReducer from './authSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'auth', storage
}
const persistFilterConfig = {
  key: 'filter', storage
}
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedFilterReducer = persistReducer(persistFilterConfig, filterReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    filter: persistedFilterReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
            serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
        }).concat(contactsAPI.middleware)
});

const persistor = persistStore(store);
export {persistor, store}